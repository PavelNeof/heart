import React from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

type ButtonComponentType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  coloration?: 'common' | 'secondary';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  count?: string | number;
};

const ButtonLabelStyle = {
  common: tw`text-white`,
  secondary: tw`text-[#446B80]`,
};
const Button = React.forwardRef(
  ({ onClick, children, type, coloration = 'common', iconRight, iconLeft, count, ...rest }: ButtonComponentType, ref) => {
    return (
      <ButtonWrapper coloration={coloration} type={type} onClick={onClick} ref={ref as any} {...rest}>
        {iconLeft && (
          <span tw="relative">
            {iconLeft}{' '}
            {count && (
              <span tw="flex items-center justify-center bg-[#446B80] h-[19px] w-[19px] absolute top-[-6px] left-3 rounded-[1rem] text-white">
                {count}
              </span>
            )}
          </span>
        )}
        {children && <Label coloration={coloration}>{children}</Label>}
        {iconRight && <span>{iconRight}</span>}
      </ButtonWrapper>
    );
  },
);

export default Button;
type LabelProps = {
  coloration: string;
};
const ButtonWrapper = styled.button<LabelProps>(({ coloration }) => {
  return [
    css`
      &&& {
        ${tw`flex justify-center items-center rounded border-2 border-solid border-transparent cursor-pointer min-h-9`}
        ${coloration === 'common' &&
        `
      background-color: #7FC9F0; 
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #5C98B7FF;
      }`}
            ${coloration === 'secondary' &&
        `
      background-color: #fafcfd;
      transition: box-shadow 0.3s ease;
      &:hover {
        box-shadow: 0 0 0 2px #446B80;
        /*outline: 2px solid #446B80;
        outline-offset: 0*/;
      }`}
      }
    `,
  ];
});

const Label = styled.span<LabelProps>(({ coloration }) => [
  tw`text-sm p-1 flex justify-center items-center font-medium text-white rounded`,
  ButtonLabelStyle[coloration],
]);
