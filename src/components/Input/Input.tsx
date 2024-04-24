import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import CloseEyeIcon from '../../assets/icons/close-eye-ico.svg';
import OpenEyeIcon from '../../assets/icons/open-eye-ico.svg';

type InputPropsType = {
  placeholder?: string;
  name?: string;
  isPassword?: boolean;
};

const Input = ({ name, placeholder = '', isPassword = false, ...rest }: InputPropsType) => {
  const methods = useFormContext();
  const value = methods.watch(name ? name : '');
  const formState = useFormState({ control: methods.control, name: name ? name : '' });
  const [inputState, setInputState] = React.useState({ type: 'text', isShow: true });

  React.useEffect(() => {
    if (isPassword) {
      setInputState({ type: 'password', isShow: false });
    }
  }, []);
  const togglePasswordVisibility = () => {
    setInputState({
      isShow: !inputState.isShow,
      type: inputState.isShow ? 'password' : 'text',
    });
  };
  return (
    <Controller
      control={methods.control}
      name={name ? name : ''}
      render={() => {
        return (
          <div>
            <div tw="flex">
              <StyledInput
                css={[formState.errors[name ? name : ''] && tw`(outline outline-offset-0 outline-2 outline-red-400)`]}
                onChange={e => methods.setValue(name ? name : '', e.currentTarget.value)}
                value={value}
                placeholder={placeholder}
                type={inputState.type}
                {...rest}
              />
              {isPassword && (
                <div tw="cursor-pointer flex items-center w-fit pl-2 focus:outline-none" tabIndex={0} onClick={togglePasswordVisibility}>
                  {inputState.isShow ? <img src={CloseEyeIcon} /> : <img src={OpenEyeIcon} />}
                </div>
              )}
            </div>
            {formState.errors[name ? name : ''] && (
              <p tw="m-0 pt-[2px] text-sm text-red-500">{formState.errors[name].message as React.ReactNode}</p>
            )}
          </div>
        );
      }}
    />
  );
};

const StyledInput = styled.input`
  outline: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  height: 36px;
  padding-left: 8px;
  border: none;
  color: #446b80;

  &:focus {
    outline: 2px solid #7fc9f0;
  }
`;
export default Input;
