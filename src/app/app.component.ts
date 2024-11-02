import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Subscription, timer} from "rxjs";
import {AudioService} from './core/services/audio.service';
import {DrumHitsEnum, SimpleEnum} from "./core/enums/sounds.enum";
import {IFormGroupBeats, IFormGroupControl} from "./core/types/formGroup";
import {DATA_GRIDS, Grids, GridsEnum, NotesType, NoteType} from "./core/types/notes";
import {CONTROL_SECTION_VALUES, ControlSectionRoute} from "./core/types/aplication";
import {DATA_SOUNDS, RecomendationMap, SoundsEnum} from "./core/types/sounds";
import {BANK_DATA, BankEnum, BankGrids} from "./core/types/bank";
import {TapTempo} from "./core/models/tapTempo";
import {RhythmFilterPipe} from "./core/pipes/rhythm-filter.pipe";
import {SOUND_DATA, SoundEnum} from "./core/types/sound";
import {AutoScrollDirective} from "./core/directives/auto-scroll.directive";
import {debounceTime, finalize, take} from "rxjs/operators";
import {CONFIG_SOUNDS} from "./core/types/setupSounds";


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule, RhythmFilterPipe, AutoScrollDirective, NgOptimizedImage]
})
export class AppComponent implements OnInit {

  tapTempo = new TapTempo();
  isShowCountSelect = false;
  countPreStart: 1 | 2 | null = null;
  bars = 1;

  sound = SOUND_DATA;
  banks = BANK_DATA;
  rhythms = DATA_GRIDS;
  sounds = DATA_SOUNDS;
  activeSound = SoundsEnum.StandardSet;
  gridsEnum = GridsEnum;
  activeGrid: GridsEnum = GridsEnum.Beat_01;
  bankEnum = BankEnum;
  drumHitsEnum = DrumHitsEnum;

  activeBank = BankEnum.All;
  metronome: Subscription | null = null;
  sections = CONTROL_SECTION_VALUES;
  curSection = ControlSectionRoute.Edit;
  sectionRoutes = ControlSectionRoute;
  curBit = -1;

  curActiveSounds = this.audio.activeSounds;

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

  formGroupGroove = AppComponent._getFormGroupGroove(4,4, Grids.get(GridsEnum.Beat_01));

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
    if (value && value < 6) {
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
    this._autoSetRecomendationSound();
  }

  public setBank(bank: BankEnum) {
    this.activeBank = bank;
    this._autoSetGrid();
  }

  public setSounds(sound: SoundsEnum) {
    this.activeSound = sound;
    this._changeSounds()
  }

  public setupActiveSound(drum: DrumHitsEnum, sound: SoundEnum) {
    const options = { [drum]: sound } as Record<DrumHitsEnum, SoundEnum>;
    this.audio.setActiveSounds(options)
  }

  public onClickFormGroupGrooveLabel(e: Event, c: AbstractControl, v: number) {
    e.preventDefault();
    e.stopPropagation();

    c.patchValue(v === 2 ? 0 : ++v)
  }

  private _changeSounds() {
    const setup = CONFIG_SOUNDS[this.activeSound];
    if (setup) {
      Object.entries(setup).forEach(([key, value]) => {
        if (value) {
          this.setupActiveSound(key as DrumHitsEnum, value)
        }
      })
    } else {
      alert('Не додано конфігурацію для цього звучання! Зверніться до розробника за поміччю!')
    }
  }

  private _autoSetGrid() {
    const grids = BankGrids.get(this.activeBank);
    if (!grids || !grids.length) throw Error();
    this.setGrid(grids[0]);
  }

  private _autoSetRecomendationSound() {
    const sound = RecomendationMap.get(this.activeGrid);
    if (!sound) throw Error();
    this.setSounds(sound);
  }

  private _play() {
    const dueTime = 0;
    const { bpm } = this.formGroupControls.value;
    const { beats, subs } = this.formGroupBeats.value;
    if (!bpm || !beats || !subs) throw Error();
    const fullPeriodOrScheduler = ((60 / bpm) * 1000 );
    const periodOrScheduler = fullPeriodOrScheduler / beats;

    if (this.countPreStart) {
      const counts = this.countPreStart * beats + 1;
      timer(dueTime, fullPeriodOrScheduler)
        .pipe(take(counts), finalize(() => {
          this._onMetronome(periodOrScheduler, dueTime)
        }))
        .subscribe((count) => {
          if (counts !== count + 1) {
            this.audio.playSound(SimpleEnum.Count, 2)
          }
        })
    }
    else {
      this._onMetronome(periodOrScheduler, dueTime)
    }
  }

  private _onMetronome(periodOrScheduler: number, dueTime = 0) {
    const { bpm } = this.formGroupControls.value;
    const { beats, subs } = this.formGroupBeats.value;
    if (!bpm || !beats || !subs) throw Error();
    const { hh, snare, kick } = this.formGroupGroove.controls;
    const length = beats * subs - 2;

    this.metronome = timer(dueTime, periodOrScheduler).subscribe((count) => {
      if (this.curBit > length) {
        this.bars++;
        this._resetCurBit();
      }
      this.curBit++;

      if (hh.controls[this.curBit].value) this.audio.playSound(DrumHitsEnum.HiHat, hh.controls[this.curBit].value);
      if (snare.controls[this.curBit].value) this.audio.playSound(DrumHitsEnum.Snare, snare.controls[this.curBit].value);
      if (kick.controls[this.curBit].value) this.audio.playSound(DrumHitsEnum.Kick, kick.controls[this.curBit].value);

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
    this.formGroupControls.valueChanges
      .pipe(debounceTime(300))
      .subscribe(({ bpm, playing, volume }) => {
      this._stop();
      playing && this._play();
    });
    this.formGroupControls.controls.volume.valueChanges
      .subscribe((gain) => {
        this.audio.setVolume(0.01*gain);
      })

    this.formGroupBeats.valueChanges.subscribe(({ beats, subs }) => {
      if (!beats || !subs) throw Error();
      this.formGroupGroove = AppComponent._getFormGroupGroove(beats, subs, Grids.get(GridsEnum.Beat_01));
    });

    this.tapTempo.bpm.subscribe((bmp) => {
      if (bmp) {
        this.formGroupControls.controls.bpm.patchValue(bmp);
      }

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
