import 'react';
import { Button, Input } from '../../components';
import { FormProvider, useForm } from 'react-hook-form';
import 'twin.macro';
import { useNavigate } from 'react-router-dom';
import { vestResolver } from '@hookform/resolvers/vest';
import { create, enforce, test } from 'vest';
import Checkbox from '../../components/Checkbox/Checkbox';
import { observer } from 'mobx-react-lite';
import fakeApiStore from '../../common/fakeApiStore';

const validationSchema = create((data = {}) => {
  test('name', 'Поле обязательно для заполнения', () => {
    enforce(data.name).isNotEmpty();
  });
  test('email', 'Поле заполненно некорректно', () => {
    enforce(data.email).isNotEmpty();
    enforce(data.email).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
  test('password', 'Поле обязательно для заполнения', () => {
    enforce(data.password).isNotEmpty();
  });
  test('repeatPassword', 'Пароли не совпадают', () => {
    enforce(data.repeatPassword).isNotEmpty();
    enforce(data.repeatPassword).equals(data.password);
  });
  test('checkbox', 'Необходимо подтвердить согласие', () => {
    enforce(data.checkbox).isTruthy();
  });
});
const Registration = observer(() => {
  const methods = useForm({
    resolver: vestResolver(validationSchema),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();
  const navigateToHome = e => {
    e.stopPropagation();
    navigate('/');
  };
  const onSubmit = data => {
    console.log('data', data);
    fakeApiStore.authorizationUser({ firstName: data.name, email: data.email, password: data.password });
    navigate('/');
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} tw="max-w-[400px] m-auto flex flex-col items-center justify-center gap-3">
        <h1 tw="text-[#446B80]">Регистрация</h1>
        <div tw="flex flex-col items-start gap-3 pl-4">
          <Input name="name" placeholder="Имя" />
          <Input name="email" placeholder="Электронный адрес" />
          <Input name="password" placeholder="Пароль" isPassword />
          <Input name="repeatPassword" placeholder="Повторите пароль" isPassword />
        </div>

        <Checkbox
          name="checkbox"
          label={<span tw="text-[#446B80] text-start">Согласие с пользовательским соглашением и политикой конфиденциальности</span>}
        />

        <div tw="flex gap-2">
          <Button type="submit">Зарегестрироваться</Button>
          <Button onClick={e => navigateToHome(e)}>Вернуться на главную</Button>
        </div>
      </form>
    </FormProvider>
  );
});

export default Registration;
