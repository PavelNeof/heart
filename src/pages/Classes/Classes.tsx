import React from 'react';
import { ClassesPropType, classNameType } from '../../common/types';
import 'twin.macro';
import tw from 'twin.macro';
import { avatarsImg } from '../Classes/Classes.lib';

const Classes = ({ classes, setInfoClassesArray, infoClassesArray, setDisabledButton, disabledButton }: ClassesPropType) => {
  const [show, setShow] = React.useState<{ [key: string]: boolean } | null>(null);

  React.useEffect(() => {
    const initShow: { [key: string]: boolean } = {};
    classes?.map(cl => (initShow[cl] = false));
    setShow(initShow);
  }, [classes]);

  const onMouseEnter = (className: classNameType) => {
    setShow(prev => ({ ...prev, [className]: true }));
  };
  const onMouseLeave = (className: classNameType) => {
    setShow(prev => ({ ...prev, [className]: false }));
  };
  const onAddArray = (e: React.FormEvent, className: classNameType) => {
    e.stopPropagation();
    if (infoClassesArray && infoClassesArray?.length < 3) {
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
          onMouseEnter={() => onMouseEnter(cl)}
          onMouseLeave={() => onMouseLeave(cl)}
        >
          {show?.[cl] && <div tw="hover:bg-none cursor-default">{avatarsImg?.[cl]}</div>}
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
