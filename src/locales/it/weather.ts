import { SimpleTranslationEntries } from "#app/interfaces/locales";

/**
 * The weather namespace holds text displayed when weather is active during a battle
 */
export const weather: SimpleTranslationEntries = {
  "sunnyStartMessage": "La luce solare è intensa!",
  "sunnyLapseMessage": "La luce solare è forte.",
  "sunnyClearMessage": "La luce solare si sta attenuando.",

  "rainStartMessage": "Ha iniziato a piovere!",
  "rainLapseMessage": "La pioggia continua.",
  "rainClearMessage": "Ha smesso di piovere.",

  "sandstormStartMessage": "Si è scatenata una tempesta di sabbia!",
  "sandstormLapseMessage": "La tempesta di sabbia infuria.",
  "sandstormClearMessage": "La tempesta di sabbia si è placata.",
  "sandstormDamageMessage": "{{pokemonNameWithAffix}} è stato colpito\ndalla tempesta di sabbia!",

  "hailStartMessage": "Ha iniziato a grandinare!",
  "hailLapseMessage": "La grandine continua a cadere.",
  "hailClearMessage": "Ha smesso di grandinare.",
  "hailDamageMessage": "{{pokemonNameWithAffix}} è stato colpito\ndalla grandine!",

  "snowStartMessage": "Ha iniziato a nevicare!",
  "snowLapseMessage": "La neve sta continuando a cadere.",
  "snowClearMessage": "Ha smesso di nevicare!.",

  "fogStartMessage": "È emersa una fitta nebbia!",
  "fogLapseMessage": "La nebbia continua.",
  "fogClearMessage": "La nebbia è scomparsa.",

  "heavyRainStartMessage": "Ha iniziato a piovere forte!",
  "heavyRainLapseMessage": "La pioggia battente continua.",
  "heavyRainClearMessage": "La pioggia battente è cessata.",

  "harshSunStartMessage": "La luce solare è molto intensa!",
  "harshSunLapseMessage": "La luce solare è estremamente calda.",
  "harshSunClearMessage": "La luce solare si sta attenuando.",

  "strongWindsStartMessage": "È apparsa una corrente d'aria misteriosa!",
  "strongWindsLapseMessage": "La corrente d'aria soffia intensamente.",
  "strongWindsEffectMessage": "La corrente misteriosa indebolisce l’attacco!",
  "strongWindsClearMessage": "La corrente d'aria è cessata."
};

export const terrain: SimpleTranslationEntries = {
  "misty": "Misty",
  "mistyStartMessage": "Mist swirled around the battlefield!",
  "mistyClearMessage": "The mist disappeared from the battlefield.",
  "mistyBlockMessage": "{{pokemonNameWithAffix}} surrounds itself with a protective mist!",

  "electric": "Electric",
  "electricStartMessage": "An electric current ran across the battlefield!",
  "electricClearMessage": "The electricity disappeared from the battlefield.",

  "grassy": "Grassy",
  "grassyStartMessage": "Grass grew to cover the battlefield!",
  "grassyClearMessage": "The grass disappeared from the battlefield.",

  "psychic": "Psychic",
  "psychicStartMessage": "The battlefield got weird!",
  "psychicClearMessage": "The weirdness disappeared from the battlefield!",

  "defaultBlockMessage": "{{pokemonNameWithAffix}} is protected by the {{terrainName}} Terrain!"
};
