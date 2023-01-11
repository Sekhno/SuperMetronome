import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Subscription, timer} from "rxjs";
import {AudioService} from './core/services/audio.service';
import {SoundsEnum} from "./core/enums/sounds.enum";
import {IFormGroupBeats, IFormGroupControl} from "./core/types/formGroup";
import {METRONOME_GRID, NotesType, NoteType, GridsEnum, Grids, DATA_GRIDS} from "./core/types/notes";
import {CONTROL_SECTION_VALUES, ControlSectionRoute} from "./core/types/aplication";
import {DATA_SOUNDS} from "./core/types/sounds";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent implements OnInit {

  isShowCountSelect = false;
  countPreStart: 1 | 2 | null = null;
  bars = 1;

  rhythms = DATA_GRIDS;
  sounds = DATA_SOUNDS;
  grids = GridsEnum;
  activeGrid: GridsEnum = GridsEnum.Metronome;
  metronome: Subscription | null = null;
  sections = CONTROL_SECTION_VALUES;
  curSection = ControlSectionRoute.Edit;
  curBit = -1;

  formGroupControls = new FormGroup<IFormGroupControl>({
    playing: new FormControl(false, { nonNullable: true }),
    bpm: new FormControl(100, { nonNullable: true }),
    volume: new FormControl(100, { nonNullable: true }),
    swing: new FormControl(0, { nonNullable: true })
  });

  formGroupBeats = new FormGroup<IFormGroupBeats>({
    beats: new FormControl(4, { nonNullable: true }),
    subs: new FormControl(4, { nonNullable: true })
  })

  formGroupGroove = AppComponent._getFormGroupGroove(4,4, METRONOME_GRID);

  public get playing(): boolean {
    return this.formGroupControls.controls.playing.value;
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

  public get swing() {
    return this.formGroupControls.controls.swing.value;
  }

  public get volume() {
    return this.formGroupControls.controls.volume.value
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

  public setGrid(grid: GridsEnum) {
    this.activeGrid = grid;
    this.formGroupGroove = AppComponent._getFormGroupGroove(4,4, Grids.get(grid));
  }

  private _play() {
    const dueTime = 0;
    const { bpm } = this.formGroupControls.value;
    const { beats, subs } = this.formGroupBeats.value;
    if (!bpm || !beats || !subs) throw Error();
    const { hh, snare, kick } = this.formGroupGroove.controls;
    const periodOrScheduler = ((60 / bpm) * 1000 ) / beats;
    const length = beats * subs - 2;

    this.metronome = timer(dueTime, periodOrScheduler).subscribe((count) => {
      if (this.curBit > length) {
        this.bars++;
        this._resetCurBit();
      }
      this.curBit++;

      if (hh.controls[this.curBit].value) this.audio.playSound(SoundsEnum.HiHat, hh.controls[this.curBit].value);
      if (snare.controls[this.curBit].value) this.audio.playSound(SoundsEnum.Snare, snare.controls[this.curBit].value);
      if (kick.controls[this.curBit].value) this.audio.playSound(SoundsEnum.Kick, kick.controls[this.curBit].value);

      this.cdr.markForCheck();
    });
  }

  private _stop() {
    this.metronome?.unsubscribe();
    this._resetBars();
    this._resetCurBit();
  }

  private _resetBars() {
    this.bars = 1;
  }

  private _resetCurBit() {
    this.curBit = -1
  }

  private _onSubscribe() {
    this.formGroupControls.valueChanges.subscribe(({ bpm, playing, volume }) => {
      this._stop();
      playing && this._play();
    });
    this.formGroupControls.controls.volume.valueChanges.subscribe((gain) => {
      this.audio.setVolume(0.01*gain);
    })

    this.formGroupBeats.valueChanges.subscribe(({ beats, subs }) => {
      if (!beats || !subs) throw Error();
      this.formGroupGroove = AppComponent._getFormGroupGroove(beats, subs, METRONOME_GRID);

    })

    // this.formGroupGroove.valueChanges.subscribe(console.log)
  }

  private static _getFormGroupGroove(beats: number, subs: number, notes: NotesType = [[], [], []]) {
    const [ hh, snare, kick ] = notes;

    return new FormGroup({
      hh: AppComponent._getFormArrayByLength(beats * subs, hh),
      snare: AppComponent._getFormArrayByLength(beats * subs, snare),
      kick: AppComponent._getFormArrayByLength(beats * subs, kick)
    })
  }

  private static _getFormArrayByLength(length: number, note: NoteType) {
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(new FormControl(note[i], { nonNullable: true }))
    }
    return new FormArray(arr);
  }

  constructor(
    private audio: AudioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._onSubscribe();
  }
}
