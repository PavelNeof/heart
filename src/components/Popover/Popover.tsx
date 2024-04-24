import 'react';
import { Popover as PopoverPrim } from '@radix-ui/themes';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

type PopoverComponentType = {
  trigger?: React.ReactElement;
  children?: React.ReactElement | JSX.Element;
  disabled?: boolean;
  align?: 'center' | 'start' | 'end' | undefined;
  close?: boolean;
};
const PopoverContext = React.createContext({} as { closePopover: () => void });
export const usePopover = () => React.useContext(PopoverContext);
const Popover = ({ trigger, children, disabled, close, align = 'center' }: PopoverComponentType) => {
  const ref = React.useRef<HTMLDivElement>();
  const closePopover = React.useCallback(() => {
    ref.current?.click();
  }, []);
  const ContentCore = () => {
    return <PopoverContext.Provider value={{ closePopover }}>{children}</PopoverContext.Provider>;
  };

  if (disabled) {
    return trigger;
  }

  return (
    <PopoverPrim.Root>
      <PopoverPrim.Trigger>
        <div tw="cursor-pointer w-fit">{trigger}</div>
      </PopoverPrim.Trigger>
      <Content align={align}>
        <ContentCore />
        {close && (
          <PopoverPrim.Close>
            <div ref={ref} />
          </PopoverPrim.Close>
        )}
      </Content>
    </PopoverPrim.Root>
  );
};

export default Popover;

const Content = styled(PopoverPrim.Content)`
  ${tw`rounded min-w-[150px] bg-[#fafcfd] z-50 p-2`}
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.16);
`;
