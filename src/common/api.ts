import { paramsAllCardsType, paramsSingleCardType } from '@/common/types';

export const getInfo = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

export const getClass = (className: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getFaction = (faction: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/${faction}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getRace = (race: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${race}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getSet = (set: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getQuality = (quality: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/${quality}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getType = (type: string) => {
  return {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${type}`,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
};

export const getBacks = (locale?: string) => {
  const result = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks`,
    params: { locale: locale },
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return result;
};

export const getAllCards = (params?: paramsAllCardsType) => {
  const result = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
    params,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return result;
};
export const getSingleCard = (name: string, params?: paramsSingleCardType) => {
  const result = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}`,
    params,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return result;
};
export const searchCards = (name: string, params?: paramsSingleCardType) => {
  const result = {
    method: 'GET',
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
    params,
    headers: {
      'X-RapidAPI-Key': '8ef3e722f2mshd72013bfa133f59p1dc021jsn05cbe034905a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return result;
};
