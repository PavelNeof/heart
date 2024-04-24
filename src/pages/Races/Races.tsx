import 'react';
import { RacesType } from '../../common/types';

const Races = ({ races }: RacesType) => {
  console.log('races', races);
  return (
    <div>
      {races?.map(race => (
        <div>{race}</div>
      ))}
    </div>
  );
};

export default Races;
