export enum SoundEnum {
  Click_01 = 'Clicks/Cub_Hi',
  Click_02 = 'Clicks/Cub_low',
  Click_03 = 'Clicks/Logic_Hi',
  Click_04 = 'Clicks/Logic_low',
  Click_05 = 'Clicks/Metronome',
  Click_06 = 'Clicks/MetronomeUp',

  Kick_01 = 'Kicks/adt_kick_death',
  Kick_02 = 'Kicks/adt_kick_huge',
  Kick_03 = 'Kicks/adt_kick_large',
  Kick_04 = 'Kicks/adt_kick_punchy',
  Kick_05 = 'Kicks/adt_kick_rattle',
  Kick_06 = 'Kicks/adt_kick_raw',
  Kick_07 = 'Kicks/adt_kick_teeth',
  Kick_08 = 'Kicks/adt_kick_thick',
  Kick_09 = 'Kicks/adt_kick_thuddy',
  Kick_10 = 'Kicks/adt_kick_warm',

  Snare_01 = 'Snares/adt_snare_vintage_1',
  Snare_02 = 'Snares/adt_snare_vintage_2',
  Snare_03 = 'Snares/adt_snare_vintage_3',
  Snare_04 = 'Snares/adt_snare_vintage_chain',
  Snare_05 = 'Snares/adt_snare_vintage_ghostnote',
  Snare_06 = 'Snares/adt_snare_vintage_rimshot',
  Snare_07 = 'Snares/adt_snare_woofy',

  HiHat_01 = 'Hats/adt_hat_closed_bells',
  HiHat_02 = 'Hats/adt_hat_closed_body',
  HiHat_03 = 'Hats/adt_hat_closed_clean',
  HiHat_04 = 'Hats/adt_hat_closed_crisp',
  HiHat_05 = 'Hats/adt_hat_closed_crispy',
  HiHat_06 = 'Hats/adt_hat_closed_crunchy',
  HiHat_07 = 'Hats/adt_hat_closed_paper',
  HiHat_08 = 'Hats/adt_hat_closed_punch',
  HiHat_09 = 'Hats/adt_hat_closed_quick',
  HiHat_10 = 'Hats/adt_hat_closed_shooter',
  HiHat_11 = 'Hats/adt_hat_closed_snare',
  HiHat_12 = 'Hats/adt_hat_closed_sultan',
  HiHat_13 = 'Hats/adt_hat_closed_tight',
  HiHat_14 = 'Hats/adt_hat_closed_tight8s',
  HiHat_15 = 'Hats/adt_hat_open_clean',
  HiHat_16 = 'Hats/adt_hat_open_cleaner',
  HiHat_17 = 'Hats/adt_hat_open_crunchy',
  HiHat_18 = 'Hats/adt_hat_open_shooter',
  HiHat_19 = 'Hats/adt_hat_open_tough',
}

export const SOUND_DATA: Array<{ key: SoundEnum, value: string }> = [
  { key: SoundEnum.Click_01, value: 'Click 1' },
  { key: SoundEnum.Click_02, value: 'Click 2' },
  { key: SoundEnum.Click_03, value: 'Click 3' },
  { key: SoundEnum.Click_04, value: 'Click 4' },
  { key: SoundEnum.Click_05, value: 'Click 5' },
  { key: SoundEnum.Click_06, value: 'Click 6' },
  { key: SoundEnum.Kick_01, value: 'Kick 1' },
  { key: SoundEnum.Kick_02, value: 'Kick 2' },
  { key: SoundEnum.Kick_03, value: 'Kick 3' },
  { key: SoundEnum.Kick_04, value: 'Kick 4' },
  { key: SoundEnum.Kick_05, value: 'Kick 5' },
  { key: SoundEnum.Kick_06, value: 'Kick 6' },
  { key: SoundEnum.Kick_07, value: 'Kick 7' },
  { key: SoundEnum.Kick_08, value: 'Kick 8' },
  { key: SoundEnum.Kick_09, value: 'Kick 9' },
  { key: SoundEnum.Kick_10, value: 'Kick 10' },
  { key: SoundEnum.Snare_01, value: 'Snare 1' },
  { key: SoundEnum.Snare_02, value: 'Snare 2' },
  { key: SoundEnum.Snare_03, value: 'Snare 3' },
  { key: SoundEnum.Snare_04, value: 'Snare 4' },
  { key: SoundEnum.Snare_05, value: 'Snare 5' },
  { key: SoundEnum.Snare_06, value: 'Snare 6' },
  { key: SoundEnum.Snare_07, value: 'Snare 7' },
  { key: SoundEnum.HiHat_01, value: 'HiHat 1' },
  { key: SoundEnum.HiHat_02, value: 'HiHat 2' },
  { key: SoundEnum.HiHat_03, value: 'HiHat 3' },
  { key: SoundEnum.HiHat_04, value: 'HiHat 4' },
  { key: SoundEnum.HiHat_05, value: 'HiHat 5' },
  { key: SoundEnum.HiHat_06, value: 'HiHat 6' },
  { key: SoundEnum.HiHat_07, value: 'HiHat 7' },
  { key: SoundEnum.HiHat_08, value: 'HiHat 8' },
  { key: SoundEnum.HiHat_09, value: 'HiHat 9' },
  { key: SoundEnum.HiHat_10, value: 'HiHat 10' },
  { key: SoundEnum.HiHat_11, value: 'HiHat 11' },
  { key: SoundEnum.HiHat_12, value: 'HiHat 12' },
  { key: SoundEnum.HiHat_13, value: 'HiHat 13' },
  { key: SoundEnum.HiHat_14, value: 'HiHat 14' },
  { key: SoundEnum.HiHat_15, value: 'HiHat 15' },
  { key: SoundEnum.HiHat_16, value: 'HiHat 16' },
  { key: SoundEnum.HiHat_17, value: 'HiHat 17' },
  { key: SoundEnum.HiHat_18, value: 'HiHat 18' },
  { key: SoundEnum.HiHat_19, value: 'HiHat 19' },
];
