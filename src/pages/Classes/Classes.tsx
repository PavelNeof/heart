import React from 'react';
import { getClass } from '../../common/api';
import axios from 'axios';
import { ClassesPropType } from '../../common/types';
import 'twin.macro';
import tw from 'twin.macro';
import { avatarsImg } from '../Classes/Classes.lib';

const Classes = ({ classes, setLoading, setInfoClassesArray, infoClassesArray, setDisabledButton, disabledButton }: ClassesPropType) => {
  const [show, setShow] = React.useState(null);

  React.useEffect(() => {
    const initShow = {};
    classes?.map(cl => (initShow[cl] = false));
    setShow(initShow);
  }, [classes]);
  // const onGetClass = async (className: string) => {
  //   setLoading(true);
  //   const currentClass = getClass(className);
  //   try {
  //     const response = await axios.request(currentClass);
  //     console.log('class', response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setLoading(false);
  // };

  const onMouseEnter = className => {
    setShow(prev => ({ ...prev, [className]: true }));
  };
  const onMouseLeave = className => {
    setShow(prev => ({ ...prev, [className]: false }));
  };
  const onAddArray = (e, className) => {
    e.stopPropagation();
    if (infoClassesArray?.length < 3) {
      setInfoClassesArray(prev => [...prev, className]);
      setDisabledButton(prev => ({ ...prev, [className]: className }));
      return;
    }
    const newClassArray = [...infoClassesArray];
    newClassArray.shift();
    newClassArray.push(className);
    const newClassObj = {};
    newClassArray.map(clName => (newClassObj[clName] = clName));
    setDisabledButton(newClassObj);
    setInfoClassesArray(newClassArray);
  };

  return (
    <div tw="w-full ">
      {classes?.map((cl, index) => (
        <div
          key={cl}
          tw="w-full cursor-pointer hover:bg-red-600"
          // onClick={() => onGetClass(cl)}
          onMouseEnter={() => onMouseEnter(cl)}
          onMouseLeave={() => onMouseLeave(cl)}
        >
          {show[cl] && <div tw="hover:bg-none">{avatarsImg?.[cl]}</div>}
          <div
            tw="w-full flex justify-between items-center hover:(bg-sky-700)"
            css={[classes?.length - 1 !== index ? tw`` : tw`rounded-b`]}
          >
            {cl}
            <button disabled={disabledButton?.[cl]} tw="bg-sky-400" onClick={e => onAddArray(e, cl)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
