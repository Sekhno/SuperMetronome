import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Subject, Subscription, timer} from "rxjs";
import {AudioService} from './core/services/audio.service';
import {DrumHitsEnum, SIMPLE_ENUMS, SimpleEnum} from "./core/enums/sounds.enum";
import {IFormGroupBeats, IFormGroupControl} from "./core/types/formGroup";
import {DATA_GRIDS, Grids, GridsEnum, NotesType, NoteType} from "./core/types/notes";
import {CONTROL_SECTION_VALUES, ControlSectionRoute} from "./core/types/aplication";
import {DATA_SOUNDS, RecomendationMap, SoundsEnum} from "./core/types/sounds";
import {BANK_DATA, BankEnum, BankGrids} from "./core/types/bank";
import {TapTempo} from "./core/models/tapTempo";
import {RhythmFilterPipe} from "./core/pipes/rhythm-filter.pipe";
import {SOUND_DATA, SoundEnum} from "./core/types/sound";
import {AutoScrollDirective} from "./core/directives/auto-scroll.directive";
import {count, debounceTime, finalize, take, takeUntil, throttleTime} from "rxjs/operators";
import {CONFIG_SOUNDS} from "./core/types/setupSounds";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {ButtonModule} from "primeng/button";
import {SliderModule} from "primeng/slider";
import {SelectButtonModule} from "primeng/selectbutton";
import {Event} from "@angular/router";
import {c} from "@angular/core/navigation_types.d-u4EOrrdZ";
import {DialogModule} from "primeng/dialog";
import {ToggleSwitchModule} from "primeng/toggleswitch";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, RhythmFilterPipe, AutoScrollDirective, NgOptimizedImage,
    ButtonModule, SliderModule, SelectButtonModule, DialogModule, ToggleSwitchModule, FormsModule
  ]
})
export class AppComponent
  implements OnInit, OnDestroy
{
  beatHiderVisible = false;
  isBeatHiderActive = signal(false)

  hiderModeOptions = [
    { name: '7.1', value: 71 },
    { name: '3.1', value: 31 },
    { name: '6.2', value: 62 },
    { name: '2.2', value: 22 },
    { name: '4.4', value: 44 },
    { name: '2.6', value: 26 },
    { name: '8.8', value: 88 }
  ]
  navigationOptions1 = [
    { name: ControlSectionRoute.Edit, value: ControlSectionRoute.Edit },
    { name: ControlSectionRoute.Sounds, value: ControlSectionRoute.Sounds },
    { name: ControlSectionRoute.Mixer, value: ControlSectionRoute.Mixer, disabled: true }
  ];

  navigationOptions2 = [
    { name: 'save', value: 1, disabled: true },
    { name: 'rename', value: 2, disabled: true },
    { name: 'delete', value: 3, disabled: true }
  ];

  tapTempo = new TapTempo();
  isShowCountSelect = false;
  countPreStart: 1 | 2 | null = null;
  bars = signal(1);

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
  curBit = signal(-1);

  curActiveSounds = this.audio.activeSounds;

  playing = signal(false);
  bpm = computed(() => this.tapTempo.bpm());
  // volume = signal(100)

  hiderModeOptionsControl = new FormControl(31, { nonNullable: true });
  hideLightsCheckedControl = new FormControl(false, { nonNullable: true });
  formNavigationControl = new FormControl(ControlSectionRoute.Edit, { nonNullable: true })
  formGroupControls = new FormGroup<IFormGroupControl>({
    // playing: new FormControl(false, { nonNullable: true }),
    bpm: new FormControl(100, { nonNullable: true }),
    volume: new FormControl(100, { nonNullable: true }),
    swing: new FormControl({value: 0, disabled: true}, { nonNullable: true })
  });

  formGroupBeats = new FormGroup<IFormGroupBeats>({
    beats: new FormControl(4, { nonNullable: true }),
    subs: new FormControl(4, { nonNullable: true })
  })

  formGroupGroove = AppComponent._getFormGroupGroove(4,4, Grids.get(GridsEnum.Beat_01));

  private readonly onDestroy$ = new Subject<void>();

  public onPlay() {
    this.playing.update((isPlaying) => {
      this._stop();
      if (!isPlaying) {
        this._play();
      }
      return !isPlaying
    });
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

  public decBPM() {
    this.tapTempo.bpm.update(v => v-1);
    this._onStopPlaying()
  }

  public incBPM() {
    this.tapTempo.bpm.update(v => v+1);
    this._onStopPlaying();
  }

  public decBeats() {
    let value = this.formGroupBeats.controls.beats.value;
    if (value && value > 1) {
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
    this._onStopPlaying();
  }

  public setBank(bank: BankEnum) {
    this.activeBank = bank;
    this._autoSetGrid();
    this._onStopPlaying()
  }

  public setSounds(sound: SoundsEnum) {
    this.activeSound = sound;
    this._changeSounds();
  }

  public setupActiveSound(drum: DrumHitsEnum, sound: SoundEnum) {
    const options = { [drum]: sound } as Record<DrumHitsEnum, SoundEnum>;
    this.audio.setActiveSounds(options);
  }

  public onClickFormGroupGrooveLabel(e: MouseEvent, c: AbstractControl, v: number) {
    e.preventDefault();
    e.stopPropagation();

    c.patchValue(v === 2 ? 0 : ++v)
  }

  private _onStopPlaying() {
    if (this.playing()) {
      this.playing.update(() => false);
      this._stop()
    }
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
    const { beats, subs } = this.formGroupBeats.value;

    if (!this.bpm() || !beats || !subs) throw Error();

    const fullPeriodOrScheduler = ((60 / this.bpm()) * 1000 );
    const periodOrScheduler = fullPeriodOrScheduler / subs;

    if (this.countPreStart) {
      const counts = this.countPreStart * beats + 1;

      timer(dueTime, fullPeriodOrScheduler)
        .pipe(take(counts), finalize(() => {
          this._onMetronome(periodOrScheduler, dueTime)
        }))
        .subscribe((count) => {
          if (counts !== count + 1) {
            this.audio.playSound(SIMPLE_ENUMS[count], 2)
          }
        })
    }
    else {
      this._onMetronome(periodOrScheduler, dueTime)
    }
  }

  private _onMetronome(periodOrScheduler: number, dueTime = 0) {
    const { beats, subs } = this.formGroupBeats.value;
    if (!this.bpm() || !beats || !subs) throw Error();
    const { hh, snare, kick } = this.formGroupGroove.controls;
    const length = beats * subs - 2;

    this.metronome = timer(dueTime, periodOrScheduler).subscribe(() => {
      if (this.curBit() > length) {
        this.bars.update(v => v+1);
        this._resetCurBit();
      }
      this.curBit.update(v => v+1);

      if (this.isBeatHiderActive()) {
        const hiderModeOption = this.hiderModeOptionsControl.value;
        const playCount = Math.floor(hiderModeOption/10);
        const hideCount = hiderModeOption%10;
        const denominator = playCount + hideCount;
        const remainder = this.bars() % denominator;

        if (remainder < 1 || remainder > playCount) return;
      }

      if (hh.controls[this.curBit()].value) this.audio.playSound(DrumHitsEnum.HiHat, hh.controls[this.curBit()].value);
      if (snare.controls[this.curBit()].value) this.audio.playSound(DrumHitsEnum.Snare, snare.controls[this.curBit()].value);
      if (kick.controls[this.curBit()].value) this.audio.playSound(DrumHitsEnum.Kick, kick.controls[this.curBit()].value);

      // this.cdr.markForCheck();
    });
  }

  private _stop() {
    this.metronome?.unsubscribe();
    this._resetBars();
    this._resetCurBit();
  }

  private _resetBars() {
    this.bars.update(() => 1);
  }

  private _resetCurBit() {
    this.curBit.update(() => -1)
  }

  private _onSubscribe() {
    this.formGroupControls.controls.bpm.valueChanges
      .pipe(takeUntil(this.onDestroy$), throttleTime(16))
      .subscribe((bpm) => {
        this.tapTempo.bpm.update(() => bpm);
        if (this.playing()) {
          this.playing.update(() => false);
          this._stop()
        }
      });

    // TO DO
    // this.formGroupControls.controls.swing.valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe((control) => {
    //     console.log(control);
    //   });

    this.formGroupControls.controls.volume.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((gain) => {
        this.audio.setVolume(0.01*gain);
      })

    this.formGroupBeats.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(({ beats, subs }) => {
        if (!beats || !subs) throw Error();
        this.formGroupGroove = AppComponent._getFormGroupGroove(beats, subs, Grids.get(this.activeGrid));
      });
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

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
