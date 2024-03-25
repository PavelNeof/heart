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
