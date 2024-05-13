import 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import IconClose from '../../assets/icons/close-ico.svg';
import tw from 'twin.macro';
type FormDataType = {
  search: string;
};
type SearchBarType = {
  onButtonClick: (search: string) => void;
  name: string;
  placeholder: string;
  clear?: boolean;
};
const SearchBar = ({ onButtonClick, name, placeholder, clear }: SearchBarType) => {
  const methods = useForm<FormDataType>();
  const value = methods.watch('search');
  const onSubmit = ({ search }) => {
    onButtonClick(search);
  };

  return (
    <Form onSubmit={methods.handleSubmit(onSubmit)}>
      <Input placeholder={placeholder} {...methods.register('search')} />
      {clear && (
        <Icon css={value?.length > 0 && [tw`opacity-100 cursor-pointer `]} onClick={() => methods.setValue('search', '')}>
          <img tw="bg-[#F2F2F2] opacity-50" src={IconClose} />
        </Icon>
      )}
      <Button type="submit">{name}</Button>
    </Form>
  );
};
const Form = tw.form`flex items-center h-9 bg-[#F2F2F2] text-gray-900 rounded focus-within:(outline outline-offset-0 outline-2 outline-[#7FC9F0])`;
const Input = tw.input`text-sm text-[#446B80] bg-[#F2F2F2] px-3 outline-none w-full border-none rounded-l focus:outline-none h-full`;
const Button = tw.button`flex justify-center text-white bg-[#7FC9F0] items-center border-2 border-none rounded-r cursor-pointer h-full transition ease-in duration-150 hover:(bg-[#5C98B7FF])`;
const Icon = styled.div(() => [tw`h-5 w-fit opacity-0 border border-b border-black transition-opacity flex items-center bg-[#F2F2F2]`]);
export default SearchBar;
