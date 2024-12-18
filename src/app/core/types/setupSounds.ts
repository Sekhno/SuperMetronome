import {SoundsEnum} from "./sounds";
import {DrumHitsEnum} from "../enums/sounds.enum";
import {SoundEnum} from "./sound";

type Config = Partial<Record<SoundsEnum, Partial<Record<DrumHitsEnum, SoundEnum|null>>>>;


export const CONFIG_SOUNDS: Config = {
  [SoundsEnum.Clicks_01]: {
    [DrumHitsEnum.HiHat]: SoundEnum.Click_01,
    [DrumHitsEnum.Snare]: SoundEnum.Click_02,
    [DrumHitsEnum.Kick]: null
  },
  [SoundsEnum.Clicks_02]: {
    [DrumHitsEnum.HiHat]: SoundEnum.Click_03,
    [DrumHitsEnum.Snare]: SoundEnum.Click_04,
    [DrumHitsEnum.Kick]: null
  },
  [SoundsEnum.Clicks_03]: {
    [DrumHitsEnum.HiHat]: SoundEnum.Click_05,
    [DrumHitsEnum.Snare]: SoundEnum.Click_06,
    [DrumHitsEnum.Kick]: null
  },
  [SoundsEnum.StandardSet]: {
    [DrumHitsEnum.HiHat]: SoundEnum.HiHat_01,
    [DrumHitsEnum.Snare]: SoundEnum.Snare_01,
    [DrumHitsEnum.Kick]:  SoundEnum.Kick_01
  },
  [SoundsEnum.FunkySet]: {
    [DrumHitsEnum.HiHat]: SoundEnum.HiHat_13,
    [DrumHitsEnum.Snare]: SoundEnum.Snare_03,
    [DrumHitsEnum.Kick]:  SoundEnum.Kick_08
  },
  [SoundsEnum.RockSet]: {
    [DrumHitsEnum.HiHat]: SoundEnum.HiHat_10,
    [DrumHitsEnum.Snare]: SoundEnum.Snare_01,
    [DrumHitsEnum.Kick]:  SoundEnum.Kick_04
  },
  [SoundsEnum.OldDrumsSet]: {
    [DrumHitsEnum.HiHat]: SoundEnum.HiHat_04,
    [DrumHitsEnum.Snare]: SoundEnum.Snare_02,
    [DrumHitsEnum.Kick]:  SoundEnum.Kick_03
  }
}
