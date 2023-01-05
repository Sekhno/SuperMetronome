import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Subscription, timer} from "rxjs";
import {AudioService} from './core/services/audio.service';
import {SoundsEnum} from "./core/enums/sounds.enum";
import {IFormGroupBeats, IFormGroupControl} from "./core/types/formGroup";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent implements OnInit {

  metronome: Subscription | null = null;

  formGroupControls = new FormGroup<IFormGroupControl>({
    playing: new FormControl(false, { nonNullable: true }),
    bpm: new FormControl(100, { nonNullable: true }),

  });

  formGroupBeats = new FormGroup<IFormGroupBeats>({
    beats: new FormControl(4, { nonNullable: true }),
    subs: new FormControl(4, { nonNullable: true })
  })

  formGroupGroove = AppComponent._getFormGroupGroove(4,4);

  constructor(
    private audio: AudioService,
    private cdr: ChangeDetectorRef
  ) {}

  public play() {
    this.audio.playSound(SoundsEnum.HiHat);
    this.audio.playSound(SoundsEnum.Kick);
  }

  public get bpm() {
    return this.formGroupControls.controls.bpm.value;
  }

  public get beats() {
    return this.formGroupBeats.controls.beats.value;
  }

  public get subs() {
    return this.formGroupBeats.controls.subs.value;
  }

  public decBPM() {
    let value = this.formGroupControls.controls.bpm.value;
    if (value) {
      this.formGroupControls.controls.bpm.patchValue(--value);
    }
  }

  public incBPM() {
    let value = this.formGroupControls.controls.bpm.value;
    if (value) {
      this.formGroupControls.controls.bpm.patchValue(++value);
    }
  }

  public decBeats() {
    let value = this.formGroupBeats.controls.beats.value;
    if (value) {
      this.formGroupBeats.controls.beats.patchValue(--value);
    }
  }

  public incBeats() {
    let value = this.formGroupBeats.controls.beats.value;
    if (value) {
      this.formGroupBeats.controls.beats.patchValue(++value);
    }
  }

  public decSubs() {
    let value = this.formGroupBeats.controls.subs.value;
    if (value && value > 3) {
      this.formGroupBeats.controls.subs.patchValue(--value);
    }
  }

  public incSubs() {
    let value = this.formGroupBeats.controls.subs.value;
    if (value && value < 6) {
      this.formGroupBeats.controls.subs.patchValue(++value);
    }
  }

  private _play() {
    const dueTime = 0;
    const { bpm } = this.formGroupControls.value;
    const { beats, subs } = this.formGroupBeats.value;
    if (!bpm || !beats || !subs) throw Error();
    const { hh, snare, kick } = this.formGroupGroove.controls;
    const periodOrScheduler = ((60 / bpm) * 1000 ) / beats;
    const length = beats * subs - 2;
    let bit = -1;
    this.metronome = timer(dueTime, periodOrScheduler).subscribe((count) => {
      bit = bit > length ? -1 : bit;
      bit += 1;

      // console.log('Bit: ' + bit);

      if (hh.controls[bit].value) this.audio.playSound(SoundsEnum.HiHat);
      if (snare.controls[bit].value) this.audio.playSound(SoundsEnum.Snare);
      if (kick.controls[bit].value) this.audio.playSound(SoundsEnum.Kick);
    });
  }

  private _stop() {
    this.metronome?.unsubscribe();
  }

  private _onSubscribe() {
    this.formGroupControls.valueChanges.subscribe(({ bpm, playing }) => {
      this._stop();
      playing && this._play();
    });

    this.formGroupBeats.valueChanges.subscribe(({ beats, subs }) => {
      if (!beats || !subs) throw Error();
      this.formGroupGroove = AppComponent._getFormGroupGroove(beats, subs);

    })

    this.formGroupGroove.valueChanges.subscribe(console.log)
  }

  private static _getFormGroupGroove(beats: number, subs: number) {
    return new FormGroup({
      hh: AppComponent._getFormArrayByLength(beats * subs),
      snare: AppComponent._getFormArrayByLength(beats * subs),
      kick: AppComponent._getFormArrayByLength(beats * subs)
    })
  }

  private static _getFormArrayByLength(length: number) {
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(new FormControl(false, { nonNullable: true }))
    }
    return new FormArray(arr);
  }

  ngOnInit() {
    this._onSubscribe();
  }
}
