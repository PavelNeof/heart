import React from 'react';
import { observer } from 'mobx-react-lite';
import 'twin.macro';
import axios from 'axios';
import { getInfo } from '../common/api';
import { infoType } from '../common/types';
import Preloader from '../components/Preloader';
import { Classes, GetClassesInfo } from '../pages/Classes';

const Home = observer(() => {
  const [data, setData] = React.useState<infoType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [infoClassesArray, setInfoClassesArray] = React.useState<string[] | null>([]);
  const [disabledButton, setDisabledButton] = React.useState({});
  const onGetInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.request(getInfo);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Preloader loading={loading} />
      <button onClick={onGetInfo} tw="mb-3">
        Get info
      </button>
      <div tw="flex gap-2">
        <div tw="w-[200px] bg-gray-100 border border-solid rounded">
          <p>classes:</p>
          <Classes
            classes={data?.classes}
            setLoading={setLoading}
            setInfoClassesArray={setInfoClassesArray}
            infoClassesArray={infoClassesArray}
            setDisabledButton={setDisabledButton}
            disabledButton={disabledButton}
          />
        </div>
        {data?.classes?.length > 0 && (
          <div>
            <GetClassesInfo
              infoClassesArray={infoClassesArray}
              setInfoClassesArray={setInfoClassesArray}
              setDisabledButton={setDisabledButton}
              setLoading={setLoading}
            />
          </div>
        )}
      </div>
    </>
  );
});
export default Home;
