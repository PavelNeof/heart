import React from 'react';
import { observer } from 'mobx-react-lite';
import 'twin.macro';
import axios from 'axios';
import { getInfo } from '../common/api';
import { InfoType } from '../common/types';
import Preloader from '../components/Preloader';
import { Select } from '../components';
import store from '../common/store';
import { Sets, Races, Classes, GetClassesInfo, Factions, Backs, Qualities, Types } from '../pages';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';

const Home = observer(() => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<InfoType | null>(store.dataInfo);
  const [display, setDisplay] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [infoClassesArray, setInfoClassesArray] = React.useState<string[]>([]);
  const [disabledButton, setDisabledButton] = React.useState({});
  const onGetInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.request(getInfo);
      setData(response.data);
      store.addData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const onChangeSelect = (value: string) => {
    setDisplay(value);
    console.log('onChangeSelect', value);
  };
  const values = [
    { label: 'Classes', value: 'classes' },
    { label: 'Faction', value: 'factions' },
    { label: 'Race', value: 'races' },
    { label: 'Sets', value: 'sets' },
    { label: 'Backs', value: 'backs' },
    { label: 'Qualities', value: 'qualities' },
    { label: 'Types', value: 'types' },
  ];

  return (
    <>
      <Preloader loading={loading} />
      <div>
        <Button onClick={() => navigate('/cards')}>Cards</Button>
        <button onClick={onGetInfo} tw="mb-3">
          Get info
        </button>
        {data && <Select onChange={onChangeSelect} values={values} placeholder={'placeholder'} />}
      </div>

      {display === 'classes' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>classes:</p>
            <Classes
              classes={data?.classes}
              setInfoClassesArray={setInfoClassesArray}
              infoClassesArray={infoClassesArray}
              setDisabledButton={setDisabledButton}
              disabledButton={disabledButton}
            />
          </div>
          {data?.classes && data?.classes?.length > 0 && (
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
      )}

      {display === 'factions' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>faction:</p>
            <Factions factions={data?.factions} />
          </div>
        </div>
      )}
      {display === 'races' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>faction:</p>
            <Races races={data?.races} />
          </div>
        </div>
      )}
      {display === 'sets' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>sets:</p>
            <Sets sets={data?.sets} />
          </div>
        </div>
      )}
      {display === 'backs' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>backs:</p>
            <Backs locales={data?.locales} />
          </div>
        </div>
      )}
      {display === 'qualities' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>qualities:</p>
            <Qualities qualities={data?.qualities} />
          </div>
        </div>
      )}
      {display === 'types' && (
        <div tw="flex gap-2">
          <div tw="w-[200px] bg-gray-100 border border-solid rounded">
            <p>types:</p>
            <Types types={data?.types} />
          </div>
        </div>
      )}
    </>
  );
});
export default Home;
