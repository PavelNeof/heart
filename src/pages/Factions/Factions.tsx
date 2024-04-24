import React from 'react';
import { FactionsType } from '@/common/types';
import 'twin.macro';
import axios from 'axios';
import { getFaction } from '../../common/api';
import Preloader from '../../components/Preloader';

const Factions = React.memo<FactionsType>(({ factions }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  console.log('factions', factions);
  const getFactions = async (faction: string) => {
    setLoading(true);
    try {
      const response = await axios.request(getFaction(faction));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <Preloader loading={loading} />
      {factions?.map(faction => (
        <div tw="flex justify-center items-center gap-2">
          {faction}
          <div>
            <button onClick={() => getFactions(faction)}>get info about this factions</button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Factions;
