import {AbstractControl, FormArray, FormControl} from "@angular/forms";

export interface IFormGroupControl {
  // playing: FormControl<boolean>
  bpm: FormControl<number>,
  volume: FormControl<number>
  swing: FormControl<number>
}

export interface IFormGroupBeats {
  beats: FormControl<number>,
  subs: FormControl<number>
}

export interface IFormGroupGroove {
  hh: FormArray
  snare: FormArray
  kick: FormArray
}
