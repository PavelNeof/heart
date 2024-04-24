import React from 'react';
import axios from 'axios';
import { getBacks } from '../../common/api';
import Preloader from '../../components/Preloader';
import { BacksType } from '../../common/types';

const localesObject = {
  DE_DE: 'deDE',
  EN_GB: 'enGB',
  EN_US: 'enUS',
  ES_ES: 'esES',
  ES_MX: 'esMX',
  FR_FR: 'frFR',
  IT_IT: 'itIT',
  JA_JP: 'jaJP',
  KO_KR: 'koKR',
  PL_PL: 'plPL',
  PT_BR: 'ptBR',
  RU_RU: 'ruRU',
  TH_TH: 'thTH',
  ZH_CN: 'zhCN',
  ZH_TW: 'zhTW',
};
const Backs = ({ locales }: BacksType) => {
  const [loading, setLoading] = React.useState(false);
  const getBacksFromLocale = async (locale?: string) => {
    setLoading(true);
    try {
      const response = await axios.request(locale ? getBacks(locale) : getBacks());
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <Preloader loading={loading} />
      {locales && Object.keys(locales).map(locale => <div onClick={() => getBacksFromLocale(localesObject[locale])}>{locale}</div>)}
    </div>
  );
};

export default Backs;
