import {GridsEnum, METRONOME_GRID} from "./notes";

export enum SoundsEnum {
  Clicks_01 = 'CLICKS_01_SET',
  Clicks_02 = 'CLICKS_02_SET',
  Clicks_03 = 'CLICKS_03_SET',
  StandardSet = 'STANDARD_SET',
  FunkySet = 'FUNKY_SET',
  RockSet = 'ROCK_SET',
  DBSet = 'DB_SET',
  OldDrumsSet = 'OLD_DRUMS_SET',
  RideDrumSet_01 = 'RIDE_DRUM_01_SET',
  RideDrumSet_02 = 'RIDE_DRUM_02_SET',
  SHoopDrumSet_01 = 'S_HOOP_DRUM_01_SET',
  SHoopDrumSet_02 = 'S_HOOP_DRUM_02_SET',
  PercussionSet_01 = 'PERCUSSION_01_SET',
  PercussionSet_02 = 'PERCUSSION_02_SET',
  PercuDrumsSet_01 = 'PERCU_DRUMS_01_SET',
  PercuDrumsSet_02 = 'PERCU_DRUMS_02_SET',
  JazzSet = 'JAZZ_SET'
}

export const RecomendationMap = new Map<GridsEnum, SoundsEnum>([
  [GridsEnum.Metronome, SoundsEnum.Clicks_01],
  [GridsEnum.Beat_01, SoundsEnum.StandardSet],
  [GridsEnum.Beat_02, SoundsEnum.FunkySet],
  [GridsEnum.Beat_03, SoundsEnum.RockSet],
  [GridsEnum.Beat_04, SoundsEnum.DBSet],
  [GridsEnum.Beat_05, SoundsEnum.OldDrumsSet],
  [GridsEnum.Ska, SoundsEnum.StandardSet],
  [GridsEnum.DryBeat, SoundsEnum.RockSet],
  [GridsEnum.WetBeat, SoundsEnum.FunkySet],
  [GridsEnum.Pop_01, SoundsEnum.StandardSet],
  [GridsEnum.Pop_02, SoundsEnum.StandardSet],
  [GridsEnum.Pop_03, SoundsEnum.StandardSet],
  [GridsEnum.Pop_04, SoundsEnum.StandardSet],
  [GridsEnum.Pop_05, SoundsEnum.OldDrumsSet],
  [GridsEnum.Rock_01, SoundsEnum.StandardSet],
  [GridsEnum.Rock_02, SoundsEnum.RockSet],
  [GridsEnum.Rock_03, SoundsEnum.RideDrumSet_02],
  [GridsEnum.Rock_04, SoundsEnum.RockSet],
  [GridsEnum.Rock_05, SoundsEnum.RideDrumSet_02],
  [GridsEnum.DoubleRock_01, SoundsEnum.RideDrumSet_02],
  [GridsEnum.DoubleRock_02, SoundsEnum.RideDrumSet_02],
  [GridsEnum.DoubleRock_03, SoundsEnum.RideDrumSet_01],
  [GridsEnum.AngryRock_01, SoundsEnum.RockSet],
  [GridsEnum.AngryRock_02, SoundsEnum.RideDrumSet_02],
  [GridsEnum.Funk_01, SoundsEnum.StandardSet],
  [GridsEnum.Funk_02, SoundsEnum.FunkySet],
  [GridsEnum.Funk_03, SoundsEnum.StandardSet],
  [GridsEnum.Funk_04, SoundsEnum.OldDrumsSet],
  [GridsEnum.Funk_05, SoundsEnum.FunkySet],
  [GridsEnum.LatinSon_01, SoundsEnum.PercussionSet_01],
  [GridsEnum.LatinSon_02, SoundsEnum.PercussionSet_02],
  [GridsEnum.Songo_01, SoundsEnum.SHoopDrumSet_01],
  [GridsEnum.Songo_02, SoundsEnum.RideDrumSet_01],
  [GridsEnum.Songo_03, SoundsEnum.StandardSet],
  [GridsEnum.Funkbique, SoundsEnum.RockSet],
  [GridsEnum.ChaCha, SoundsEnum.PercuDrumsSet_01],
  [GridsEnum.Reggae, SoundsEnum.SHoopDrumSet_01],
  [GridsEnum.Reggaeton_01, SoundsEnum.StandardSet],
  [GridsEnum.Reggaeton_02, SoundsEnum.RideDrumSet_01],
  [GridsEnum.Rhumba, SoundsEnum.PercuDrumsSet_02]
]);

export const DATA_SOUNDS: Array<{ key: SoundsEnum, value: string}> = [
  { key: SoundsEnum.Clicks_01, value: 'Clicks 1' },
  { key: SoundsEnum.Clicks_02, value: 'Clicks 2' },
  { key: SoundsEnum.Clicks_03, value: 'Clicks 3' },
  { key: SoundsEnum.StandardSet, value: 'Standard Set' },
  { key: SoundsEnum.FunkySet, value: 'Funky Set' },
  { key: SoundsEnum.RockSet, value: 'Rock Set' },
  { key: SoundsEnum.DBSet, value: 'D&B Set' },
  { key: SoundsEnum.OldDrumsSet, value: 'Old Drums' },
  { key: SoundsEnum.RideDrumSet_01, value: 'Ride Drum Set 1' }
];