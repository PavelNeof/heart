import React from 'react';

export type InfoType = {
  classes: classNameType[];
  factions: factionsNameType[];
  locales: localesObjectType;
  patch: string;
  qualities: qualitiesTypeName[];
  races: racesNameType[];
  sets: setsNameType[];
  standard: string[];
  types: typesTypeName[];
};

export type ClassesPropType = {
  classes: classNameType[] | undefined;
  setInfoClassesArray: (array: string[]) => void;
  infoClassesArray: string[];
  setDisabledButton: ({}: any) => void;
  disabledButton: any;
};

export type GetClassesInfoType = {
  setInfoClassesArray: (array: string[]) => void;
  infoClassesArray: string[] | null;
  setDisabledButton: ({}: any) => void;
  setLoading: (loading: boolean) => void;
};

export type SelectComponentType = {
  values: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
};

export type FactionsType = {
  factions: factionsNameType[] | undefined;
};

export type ExpandedDataType = {
  artist: string;
  cardId: string;
  cardSet: string;
  collectible: boolean;
  dbfId: number;
  faction: string;
  health: number;
  locale: string;
  name: string;
  playerClass: string;
  rarity: string;
  type: string;
  text: string;
  key: React.Key;
};
export type ClassesInfoStateType = { [key: string]: ExpandedDataType }[];

export type RacesType = {
  races: racesNameType[] | undefined;
};
export type SetsType = {
  sets: setsNameType[] | undefined;
};
export type BacksType = {
  locales: localesObjectType | undefined;
};
export type QualitiesType = {
  qualities: qualitiesTypeName[] | undefined;
};
export type TypesType = {
  types: typesTypeName[] | undefined;
};

export type localesObjectType = {
  DE_DE: 'deDE';
  EN_GB: 'enGB';
  EN_US: 'enUS';
  ES_ES: 'esES';
  ES_MX: 'esMX';
  FR_FR: 'frFR';
  IT_IT: 'itIT';
  JA_JP: 'jaJP';
  KO_KR: 'koKR';
  PL_PL: 'plPL';
  PT_BR: 'ptBR';
  RU_RU: 'ruRU';
  TH_TH: 'thTH';
  ZH_CN: 'zhCN';
  ZH_TW: 'zhTW';
};
export type classNameType =
  | 'Death Knight'
  | 'Demon Hunter'
  | 'Dream'
  | 'Druid'
  | 'Hunter'
  | 'Mage'
  | 'Neutral'
  | 'Paladin'
  | 'Priest'
  | 'Rogue'
  | 'Shaman'
  | 'Warlock'
  | 'Warrior'
  | 'Whizbang';
export type factionsNameType = 'Horde' | 'Alliance' | 'Neutral';
export type racesNameType =
  | 'Orc'
  | 'Undead'
  | 'Murloc'
  | 'Demon'
  | 'Mech'
  | 'Elemental'
  | 'Beast'
  | 'Totem'
  | 'Pirate'
  | 'Dragon'
  | 'All'
  | 'Quilboar'
  | 'Naga';
export type qualitiesTypeName = 'Common' | 'Free' | 'Rare' | 'Epic' | 'Legendary';
export type typesTypeName = 'Hero' | 'Minion' | 'Spell' | 'Enchantment' | 'Weapon' | 'Hero Power' | 'Location';
export type setsNameType =
  | 'Basic'
  | 'Classic'
  | 'Hall of Fame'
  | 'Missions'
  | 'Demo'
  | 'System'
  | 'Slush'
  | 'Promo'
  | 'Naxxramas'
  | 'Goblins vs Gnomes'
  | 'Blackrock Mountain'
  | 'The Grand Tournament'
  | 'Credits'
  | 'Hero Skins'
  | 'Tavern Brawl'
  | 'The League of Explorers'
  | 'Whispers of the Old Gods'
  | 'One Night in Karazhan'
  | 'Mean Streets of Gadgetzan'
  | `Journey to Un'Goro`
  | 'Knights of the Frozen Throne'
  | 'Kobolds & Catacombs'
  | 'The Witchwood'
  | 'The Boomsday Project'
  | `Rastakhan's Rumble`
  | 'Rise of Shadows'
  | 'Taverns of Time'
  | 'Saviors of Uldum'
  | 'Descent of Dragons'
  | `Galakrond's Awakening`
  | 'Ashes of Outland'
  | 'Wild Event'
  | 'Scholomance Academy'
  | 'Battlegrounds'
  | 'Demon Hunter Initiate'
  | 'Madness at the Darkmoon Faire'
  | 'Forged in the Barrens'
  | 'Legacy'
  | 'Core'
  | 'Wailing Caverns'
  | 'United in Stormwind'
  | 'Mercenaries'
  | 'Fractured in Alterac Valley'
  | 'Voyage to the Sunken City'
  | 'Unknown'
  | 'Murder at Castle Nathria'
  | 'March of the Lich King'
  | 'Path of Arthas'
  | 'Festival of Legends'
  | 'TITANS'
  | 'Caverns of Time'
  | 'Showdown in the Badlands'
  | 'Tutorial'
  | `Whizbang's Workshop`
  | 'Event';
export type paramsAllCardsType = {
  cost?: string;
  attack?: string;
  health?: string;
  callback?: string;
  collectible?: string;
  durability?: string;
  locale?: localesObjectType[keyof localesObjectType];
};
export type paramsSingleCardType = Pick<paramsAllCardsType, 'collectible' | 'locale'>;
