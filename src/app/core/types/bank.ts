import {GridsEnum} from "./notes";

export enum BankEnum {
  All = 'ALL',
  Standard = 'STANDARD',
  Pop = 'POP',
  Rock = 'ROCK',
  Funk = 'FUNK',
  Latin = 'LATIN',
  Others = 'OTHERS'
}

export const BANK_DATA: Array<{ key: BankEnum, value: string }> = [
  { key: BankEnum.All, value: 'All' },
  { key: BankEnum.Standard, value: 'Standard' },
  { key: BankEnum.Pop, value: 'Pop' },
  { key: BankEnum.Rock, value: 'Rock' },
  { key: BankEnum.Funk, value: 'Funk' },
  { key: BankEnum.Latin, value: 'Latin' },
  { key: BankEnum.Others, value: 'Others' }
];

export const BankGrids = new Map<BankEnum, GridsEnum[]>([
  [BankEnum.All, [
    GridsEnum.Metronome,
    GridsEnum.Beat_01,
    GridsEnum.Beat_02,
    GridsEnum.Beat_03,
    GridsEnum.Beat_04,
    GridsEnum.Beat_05,
    GridsEnum.Ska,
    GridsEnum.DryBeat,
    GridsEnum.WetBeat,
    GridsEnum.Pop_01,
    GridsEnum.Pop_02,
    GridsEnum.Pop_03,
    GridsEnum.Pop_04,
    GridsEnum.Pop_05,
    GridsEnum.Rock_01,
    GridsEnum.Rock_02,
    GridsEnum.Rock_03,
    GridsEnum.Rock_04,
    GridsEnum.Rock_05,
    GridsEnum.DoubleRock_01,
    GridsEnum.DoubleRock_02,
    GridsEnum.DoubleRock_03,
    GridsEnum.AngryRock_01,
    GridsEnum.AngryRock_02,
    GridsEnum.Funk_01,
    GridsEnum.Funk_02,
    GridsEnum.Funk_03,
    GridsEnum.Funk_04,
    GridsEnum.Funk_05,
    GridsEnum.LatinSon_01,
    GridsEnum.LatinSon_02,
    GridsEnum.Songo_01,
    GridsEnum.Songo_02,
    GridsEnum.Songo_03,
    GridsEnum.Funkbique,
    GridsEnum.ChaCha,
    GridsEnum.Reggae,
    GridsEnum.Reggaeton_01,
    GridsEnum.Reggaeton_02,
    GridsEnum.Rhumba
  ]],
  [BankEnum.Standard, [
    GridsEnum.Metronome,
    GridsEnum.Beat_01,
    GridsEnum.Beat_02,
    GridsEnum.Beat_03,
    GridsEnum.Beat_04,
    GridsEnum.Beat_05,
    GridsEnum.Ska,
    GridsEnum.DryBeat,
    GridsEnum.WetBeat
  ]],
  [BankEnum.Pop, [
    GridsEnum.Pop_01,
    GridsEnum.Pop_02,
    GridsEnum.Pop_03,
    GridsEnum.Pop_04,
    GridsEnum.Pop_05
  ]],
  [BankEnum.Rock, [
    GridsEnum.Rock_01,
    GridsEnum.Rock_02,
    GridsEnum.Rock_03,
    GridsEnum.Rock_04,
    GridsEnum.Rock_05,
    GridsEnum.DoubleRock_01,
    GridsEnum.DoubleRock_02,
    GridsEnum.DoubleRock_03,
    GridsEnum.AngryRock_01,
    GridsEnum.AngryRock_02
  ]],
  [BankEnum.Funk, [
    GridsEnum.Funk_01,
    GridsEnum.Funk_02,
    GridsEnum.Funk_03,
    GridsEnum.Funk_04,
    GridsEnum.Funk_05,
    GridsEnum.Funkbique
  ]],
  [BankEnum.Latin, [
    GridsEnum.LatinSon_01,
    GridsEnum.LatinSon_02,
    GridsEnum.Songo_01,
    GridsEnum.Songo_02,
    GridsEnum.Songo_03,
    GridsEnum.ChaCha,
    GridsEnum.Rhumba
  ]],
  [BankEnum.Others, [
    GridsEnum.Reggae,
    GridsEnum.Reggaeton_01,
    GridsEnum.Reggaeton_02
  ]]
])
