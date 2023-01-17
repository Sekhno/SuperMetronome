export type NotesType = [ NoteType, NoteType, NoteType ]

export type NoteType = Array<0 | 1 | 2 >;

const METRONOME_GRID: NotesType = [
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0],
  [0],
  [0]
];
const BEAT_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const BEAT_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 1,  0, 1, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 1, 0]
];
const BEAT_03_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 0,  0, 0, 1, 0,  2, 0, 0, 0,  0, 0, 1, 0]
];
const BEAT_04_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 1,  0, 0, 1, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const BEAT_05_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 0],
  [2, 0, 1, 0,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 1, 0]
];
const SKA_GRID: NotesType = [
  [0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const DRY_BEAT_GRID: NotesType = [
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const WET_BEAT_GRID: NotesType = [
  [2, 1, 1, 1,  0, 1, 1, 1,  2, 1, 1, 1,  0, 1, 1, 1],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const POP_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 1, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const POP_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 1,  0, 0, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 1, 0,  0, 0, 0, 0]
];
const POP_03_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 1,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 0, 0]
];
const POP_04_GRID: NotesType = [
  [2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 1,  2, 0, 0, 0,  0, 0, 0, 0]
];
const POP_05_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 2,  0, 1, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 0,  0, 0, 0, 0,  0, 0, 2, 0,  0, 0, 1, 0]
];
const ROCK_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 2,  0, 0, 1, 0,  2, 0, 0, 2,  0, 0, 1, 0]
];
const ROCK_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 2,  0, 0, 2, 0,  0, 1, 0, 2,  0, 0, 1, 0]
];
const ROCK_03_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 0, 1,  0, 2, 0, 1,  2, 0, 0, 1,  0, 2, 0, 1]
];
const ROCK_04_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 0],
  [2, 0, 2, 0,  0, 2, 0, 1,  2, 0, 2, 0,  0, 2, 0, 1]
];
const ROCK_05_GRID: NotesType = [
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 2, 0,  0, 0, 1, 0,  2, 0, 2, 0,  0, 0, 2, 0]
];
const DOUBLE_ROCK_01_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0],
  [2, 0, 0, 0,  2, 1, 0, 0,  2, 0, 0, 0,  2, 1, 0, 0]
];
const DOUBLE_ROCK_02_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0],
  [2, 0, 0, 0,  0, 2, 0, 2,  0, 2, 0, 0,  2, 1, 0, 0]
];
const DOUBLE_ROCK_03_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0,  0, 0, 2, 0],
  [2, 0, 0, 2,  0, 0, 0, 0,  0, 2, 0, 0,  2, 0, 0, 1]
];
const ANGRY_ROCK_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0],
  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 2, 0,  0, 0, 2, 0]
];
const ANGRY_ROCK_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0],
  [0, 0, 0, 0,  0, 0, 0, 2,  0, 0, 2, 0,  0, 2, 0, 2]
];
const FUNK_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 2,  0, 0, 0, 2,  0, 0, 0, 2,  0, 0, 0, 0]
];
const FUNK_02_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 1, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 2,  0, 0, 0, 0,  0, 0, 2, 0,  0, 2, 0, 0]
];
const FUNK_03_GRID: NotesType = [
  [2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1],
  [0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0],
  [2, 0, 2, 0,  0, 0, 0, 2,  0, 2, 0, 0,  0, 1, 0, 0]
];
const FUNK_04_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 1, 0, 0,  2, 1, 0, 1,  0, 1, 0, 0,  2, 1, 0, 1],
  [2, 0, 0, 2,  0, 0, 2, 0,  0, 0, 0, 2,  0, 0, 2, 0]
];
const FUNK_05_GRID: NotesType = [
  [0, 2, 0, 0,  2, 0, 0, 2,  0, 0, 2, 0,  0, 1, 2, 0],
  [0, 0, 1, 0,  0, 1, 0, 0,  1, 0, 0, 0,  2, 0, 0, 1],
  [2, 0, 0, 2,  0, 0, 2, 0,  0, 2, 0, 0,  0, 0, 0, 0]
];
const LATIN_SON_01_GRID: NotesType = [
  [1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1],
  [0, 0, 1, 0,  0, 0, 2, 1,  0, 0, 1, 0,  0, 0, 2, 2],
  [2, 0, 0, 2,  0, 0, 0, 2,  0, 0, 2, 0,  2, 0, 0, 0]
];
const LATIN_SON_02_GRID: NotesType = [
  [1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1],
  [0, 0, 1, 0,  0, 0, 2, 0,  0, 0, 1, 0,  0, 0, 2, 2],
  [2, 0, 2, 0,  1, 2, 0, 1,  2, 0, 1, 2,  0, 2, 0, 1]
];
const SONGO_01_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 2, 0,  0, 1, 0, 2,  0, 1, 1, 0,  0, 1, 0, 2],
  [0, 0, 0, 2,  0, 0, 2, 0,  0, 0, 0, 2,  0, 0, 2, 0]
];
const SONGO_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 1, 0,  0, 1, 0, 2,  0, 1, 1, 0,  0, 1, 0, 1],
  [2, 0, 0, 2,  0, 0, 2, 0,  0, 0, 0, 2,  0, 0, 2, 0]
];
const SONGO_03_GRID: NotesType = [
  [2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1,  2, 0, 1, 1],
  [0, 0, 1, 0,  0, 1, 0, 2,  0, 1, 1, 0,  0, 1, 0, 2],
  [2, 0, 0, 2,  0, 0, 2, 0,  0, 0, 0, 2,  0, 0, 2, 0]
];
const FUNKBIQUE_GRID: NotesType = [
  [2, 0, 2, 0,  1, 2, 0, 2,  0, 1, 2, 0,  1, 2, 0, 1],
  [0, 1, 0, 2,  0, 0, 1, 0,  1, 0, 0, 2,  0, 0, 1, 0],
  [2, 0, 0, 0,  0, 0, 0, 2,  0, 2, 0, 0,  0, 0, 0, 1]
];
const CHA_CHA_GRID: NotesType = [
  [2, 0, 1, 1,  2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  2, 0, 2, 0],
  [2, 0, 0, 0,  0, 0, 1, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const REGGAE_GRID: NotesType = [
  [1, 0, 1, 0,  2, 0, 1, 0,  1, 0, 1, 0,  2, 0, 1, 0],
  [0, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0],
  [0, 0, 0, 0,  0, 0, 0, 0,  2, 0, 0, 0,  0, 0, 0, 0]
];
const REGGAETON_01_GRID: NotesType = [
  [1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0,  1, 0, 2, 0],
  [0, 0, 0, 2,  0, 0, 2, 0,  0, 0, 0, 2,  0, 0, 2, 0],
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0]
];
const REGGAETON_02_GRID: NotesType = [
  [2, 0, 1, 0,  2, 0, 1, 0,  2, 0, 1, 0,  1, 2, 0, 1],
  [0, 0, 0, 1,  0, 0, 2, 0,  0, 1, 0, 2,  0, 0, 2, 0],
  [2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0,  2, 0, 0, 0]
];
const RHUMBA_GRID: NotesType = [
  [1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1,  1, 1, 2, 1],
  [0, 0, 1, 0,  0, 0, 2, 2,  0, 0, 2, 0,  0, 0, 2, 0],
  [2, 0, 0, 1,  2, 0, 0, 0,  2, 0, 0, 1,  2, 0, 0, 0]
];

export enum GridsEnum {
  Metronome = 'METRONOME_GRID',
  Beat_01 = 'BEAT_01_GRID',
  Beat_02 = 'BEAT_02_GRID',
  Beat_03 = 'BEAT_03_GRID',
  Beat_04 = 'BEAT_04_GRID',
  Beat_05 = 'BEAT_05_GRID',
  Ska = 'SKA_GRID',
  DryBeat = 'DRY_BEAT_GRID',
  WetBeat = 'WET_BEAT_GRID',
  Pop_01 = 'POP_01_GRID',
  Pop_02 = 'POP_02_GRID',
  Pop_03 = 'POP_03_GRID',
  Pop_04 = 'POP_04_GRID',
  Pop_05 = 'POP_05_GRID',
  Rock_01 = 'ROCK_01_GRID',
  Rock_02 = 'ROCK_02_GRID',
  Rock_03 = 'ROCK_03_GRID',
  Rock_04 = 'ROCK_04_GRID',
  Rock_05 = 'ROCK_05_GRID',
  DoubleRock_01 = 'DOUBLE_ROCK_01_GRID',
  DoubleRock_02 = 'DOUBLE_ROCK_02_GRID',
  DoubleRock_03 = 'DOUBLE_ROCK_03_GRID',
  AngryRock_01 = 'ANGRY_ROCK_01_GRID',
  AngryRock_02 = 'ANGRY_ROCK_02_GRID',
  Funk_01 = 'FUNK_01_GRID',
  Funk_02 = 'FUNK_02_GRID',
  Funk_03 = 'FUNK_03_GRID',
  Funk_04 = 'FUNK_04_GRID',
  Funk_05 = 'FUNK_05_GRID',
  LatinSon_01 = 'LATIN_SON_01_GRID',
  LatinSon_02 = 'LATIN_SON_02_GRID',
  Songo_01 = 'SONGO_01_GRID',
  Songo_02 = 'SONGO_02_GRID',
  Songo_03 = 'SONGO_03_GRID',
  Funkbique = 'FUNKBIQUE_GRID',
  ChaCha = 'CHA_CHA_GRID',
  Reggae = 'REGGAE_GRID',
  Reggaeton_01 = 'REGGAETON_01_GRID',
  Reggaeton_02 = 'REGGAETON_02_GRID',
  Rhumba = 'RHUMBA_GRID'
}

export const Grids = new Map<GridsEnum, NotesType>(
  [
    [GridsEnum.Metronome, METRONOME_GRID],
    [GridsEnum.Beat_01, BEAT_01_GRID],
    [GridsEnum.Beat_02, BEAT_02_GRID],
    [GridsEnum.Beat_03, BEAT_03_GRID],
    [GridsEnum.Beat_04, BEAT_04_GRID],
    [GridsEnum.Beat_05, BEAT_05_GRID],
    [GridsEnum.Ska, SKA_GRID],
    [GridsEnum.DryBeat, DRY_BEAT_GRID],
    [GridsEnum.WetBeat, WET_BEAT_GRID],
    [GridsEnum.Pop_01, POP_01_GRID],
    [GridsEnum.Pop_02, POP_02_GRID],
    [GridsEnum.Pop_03, POP_03_GRID],
    [GridsEnum.Pop_04, POP_04_GRID],
    [GridsEnum.Pop_05, POP_05_GRID],
    [GridsEnum.Rock_01, ROCK_01_GRID],
    [GridsEnum.Rock_02, ROCK_02_GRID],
    [GridsEnum.Rock_03, ROCK_03_GRID],
    [GridsEnum.Rock_04, ROCK_04_GRID],
    [GridsEnum.Rock_05, ROCK_05_GRID],
    [GridsEnum.DoubleRock_01, DOUBLE_ROCK_01_GRID],
    [GridsEnum.DoubleRock_02, DOUBLE_ROCK_02_GRID],
    [GridsEnum.DoubleRock_03, DOUBLE_ROCK_03_GRID],
    [GridsEnum.AngryRock_01, ANGRY_ROCK_01_GRID],
    [GridsEnum.AngryRock_02, ANGRY_ROCK_02_GRID],
    [GridsEnum.Funk_01, FUNK_01_GRID],
    [GridsEnum.Funk_02, FUNK_02_GRID],
    [GridsEnum.Funk_03, FUNK_03_GRID],
    [GridsEnum.Funk_04, FUNK_04_GRID],
    [GridsEnum.Funk_05, FUNK_05_GRID],
    [GridsEnum.LatinSon_01, LATIN_SON_01_GRID],
    [GridsEnum.LatinSon_02, LATIN_SON_02_GRID],
    [GridsEnum.Songo_01, SONGO_01_GRID],
    [GridsEnum.Songo_02, SONGO_02_GRID],
    [GridsEnum.Songo_03, SONGO_03_GRID],
    [GridsEnum.Funkbique, FUNKBIQUE_GRID],
    [GridsEnum.ChaCha, CHA_CHA_GRID],
    [GridsEnum.Reggae, REGGAE_GRID],
    [GridsEnum.Reggaeton_01, REGGAETON_01_GRID],
    [GridsEnum.Reggaeton_02, REGGAETON_02_GRID],
    [GridsEnum.Rhumba, RHUMBA_GRID]
  ]
);

export const DATA_GRIDS: Array<{key: GridsEnum, value: string}> = [
  { key: GridsEnum.Metronome, value: 'Metronome'},
  { key: GridsEnum.Beat_01, value: 'Beat 1' },
  { key: GridsEnum.Beat_02, value: 'Beat 2' },
  { key: GridsEnum.Beat_03, value: 'Beat 3' },
  { key: GridsEnum.Beat_04, value: 'Beat 4' },
  { key: GridsEnum.Beat_05, value: 'Beat 5' },
  { key: GridsEnum.Ska, value: 'Ska' },
  { key: GridsEnum.DryBeat, value: 'DryBeat' },
  { key: GridsEnum.WetBeat, value: 'WetBeat' },
  { key: GridsEnum.Pop_01, value: 'Pop 1' },
  { key: GridsEnum.Pop_02, value: 'Pop 2' },
  { key: GridsEnum.Pop_03, value: 'Pop 3' },
  { key: GridsEnum.Pop_04, value: 'Pop 4' },
  { key: GridsEnum.Pop_05, value: 'Pop 5' },
  { key: GridsEnum.Rock_01, value: 'Rock 1' },
  { key: GridsEnum.Rock_02, value: 'Rock 2' },
  { key: GridsEnum.Rock_03, value: 'Rock 3' },
  { key: GridsEnum.Rock_04, value: 'Rock 4' },
  { key: GridsEnum.Rock_05, value: 'Rock 5' },
  { key: GridsEnum.DoubleRock_01, value: 'Double Rock 1' },
  { key: GridsEnum.DoubleRock_02, value: 'Double Rock 2' },
  { key: GridsEnum.DoubleRock_03, value: 'Double Rock 3' },
  { key: GridsEnum.AngryRock_01, value: 'Angry Rock 1' },
  { key: GridsEnum.AngryRock_02, value: 'Angry Rock 2' },
  { key: GridsEnum.Funk_01, value: 'Funk 1' },
  { key: GridsEnum.Funk_02, value: 'Funk 2' },
  { key: GridsEnum.Funk_03, value: 'Funk 3' },
  { key: GridsEnum.Funk_04, value: 'Funk 4' },
  { key: GridsEnum.Funk_05, value: 'Funk 5' },
  { key: GridsEnum.LatinSon_01, value: 'Latin Son 1' },
  { key: GridsEnum.LatinSon_02, value: 'Latin Son 2' },
  { key: GridsEnum.Songo_01, value: 'Songo 1' },
  { key: GridsEnum.Songo_02, value: 'Songo 2' },
  { key: GridsEnum.Songo_03, value: 'Songo 3' },
  { key: GridsEnum.Funkbique, value: 'Funkbique' },
  { key: GridsEnum.ChaCha, value: 'Cha cha' },
  { key: GridsEnum.Reggae, value: 'Reggae' },
  { key: GridsEnum.Reggaeton_01, value: 'Reggaeton 1' },
  { key: GridsEnum.Reggaeton_02, value: 'Reggaeton 2' },
  { key: GridsEnum.Rhumba, value: 'Rhumba' }
];
