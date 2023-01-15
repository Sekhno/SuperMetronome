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
]
