import 'react';
import { TypesType } from '../../common/types';

const Types = ({ types }: TypesType) => {
  console.log('types', types);
  return (
    <div>
      {types?.map(type => (
        <div>{type}</div>
      ))}
    </div>
  );
};

export default Types;
