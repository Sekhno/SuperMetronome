export type NotesType = [ NoteType, NoteType, NoteType ]

export type NoteType = Array<0 | 1 | 2 >;

export const METRONOME_GRID: NotesType = [
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
  Rock_02 = 'ROCK_02_GRID'
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
    [GridsEnum.Rock_02, ROCK_02_GRID]
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
  { key: GridsEnum.Rock_02, value: 'Rock 2' }
];
