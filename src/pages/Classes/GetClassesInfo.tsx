import 'react';
import { GetClassesInfoType } from '../../common/types';
import 'twin.macro';
import axios from 'axios';
import { getClass } from '../../common/api';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from '../../common/store';

const GetClassesInfo = observer(({ infoClassesArray, setInfoClassesArray, setDisabledButton, setLoading }: GetClassesInfoType) => {
  const navigate = useNavigate();
  const onClear = () => {
    setInfoClassesArray([]);
    setDisabledButton({});
  };

  const onGetClasses = async () => {
    setLoading(true);
    const promiseGetClasses = async (className: string) => {
      const response = await axios.request(getClass(className));
      // return { [className]: response.data };
      return { [className]: response.data };
    };
    try {
      const response = await Promise.all(infoClassesArray?.map(className => promiseGetClasses(className)));
      console.log('response', response);
      store.addClassesInfo(response);
      navigate('/classes-info');
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <div tw="border border-solid rounded">
      <p>максимальная длинна 3</p>
      {infoClassesArray && infoClassesArray?.length > 0 ? (
        infoClassesArray?.map(className => <div key={className}>{className}</div>)
      ) : (
        <div>Добавьте класс для получения информации</div>
      )}
      <button onClick={onGetClasses}>Search</button>
      <button onClick={onClear}>Сброс</button>
    </div>
  );
});

export default GetClassesInfo;
