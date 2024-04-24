import 'react';
import { SetsType } from '@/common/types';

const Sets = ({ sets }: SetsType) => {
  const uniqeSets = [...new Set(sets)];

  return (
    <div>
      {/*TODO:добавить_scrollarea*/}
      {uniqeSets.map(set => (
        <div>{set}</div>
      ))}
    </div>
  );
};

export default Sets;
