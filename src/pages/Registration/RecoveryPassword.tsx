import React from 'react';
import { Input } from '../../components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import { vestResolver } from '@hookform/resolvers/vest';
import { create, enforce, test } from 'vest';

const validationSchema = create((data = {}) => {
  test('input', 'Поле заполненно некорректно', () => {
    enforce(data.input).isNotEmpty();
    enforce(data.input).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

const RecoveryPassword = () => {
  const [sendMessage, setSendMessage] = React.useState({ isSend: false, email: null });
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
    setSendMessage({ isSend: true, email: data.input });
  };
  const buttonToHome = <Button onClick={e => navigateToHome(e)}>Вернуться на главную</Button>;
  return (
    <FormProvider {...methods}>
      {
        <form onSubmit={methods.handleSubmit(onSubmit)} tw="flex flex-col items-center gap-3">
          <h1 tw="text-[#446B80]">Восстановление пароля</h1>
          {sendMessage.isSend ? (
            <span tw="text-[#446B80]">
              Письмо на электронный адрес {sendMessage.email} с инструкцией по восстановлению пароля не отправлено, т.к. это макет без api,
              спасибо за понимание, всегда ваша служба подддержки.
            </span>
          ) : (
            <>
              <Input placeholder="Ваш электронный адрес" name="input" tw="w-[330px]" />
              <div tw="flex gap-2">
                <Button type="submit">Восстановить пароль</Button>
                {buttonToHome}
              </div>
            </>
          )}
          {sendMessage.isSend && buttonToHome}
        </form>
      }
    </FormProvider>
  );
};

export default RecoveryPassword;
