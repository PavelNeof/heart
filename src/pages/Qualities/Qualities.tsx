import 'react';
import { QualitiesType } from '../../common/types';

const Qualities = ({ qualities }: QualitiesType) => {
  console.log('qualities', qualities);
  return (
    <div>
      {qualities?.map(quality => (
        <div>{quality}</div>
      ))}
    </div>
  );
};

export default Qualities;
