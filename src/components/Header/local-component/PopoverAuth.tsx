import React from 'react';
import IconHuman from '../../../assets/icons/human-ico.svg';
import 'twin.macro';
import { Button } from '../../Button';
import { Popover } from '../../Popover';
import { Input } from '../../Input';
import { FormProvider, useForm } from 'react-hook-form';
import { vestResolver } from '@hookform/resolvers/vest';
import { create, enforce, test } from 'vest';
import { usePopover } from '../../Popover/Popover';
import CloseIconBlue from '../../../assets/icons/close-blue-ico.svg';
import CubeIcon from '../../../assets/icons/cube-ico.svg';
import HeartIcon from '../../../assets/icons/heart-ico.svg';
import SettingIcon from '../../../assets/icons/setting-ico.svg';
import ExitIcon from '../../../assets/icons/exit-ico.svg';
import Avatar from '../../../assets/icons/avatar-ico.svg';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import fakeApiStore from '../../../common/fakeApiStore';

type UseFormType = {
  email: string;
  password: string;
};
const UserIsNotAuthorized = observer(({ setIsAuth }: { setIsAuth: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const validationSchema = create((data = {}) => {
    test('email', 'Поле заполненно некорректно', () => {
      enforce(data.email).isNotEmpty();
      enforce(data.email).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });
    test('password', 'Поле обязательно для заполнения', () => {
      enforce(data.password).isNotEmpty();
    });
    test('email', 'Пользователя не существует', () => {
      enforce(data.email).equals(fakeApiStore.currentUser?.email);
    });
    test('password', 'Пользователя не существует', () => {
      enforce(data.password).equals(fakeApiStore.currentUser?.password);
    });
    // test('credentials', 'Пользователя не существует', () => {
    //   enforce(data.email).equals(fakeApiStore.currentUser?.email)
    //       .and(enforce(data.password).equals(fakeApiStore.currentUser?.password));
    // });
    // test(['email', 'password'], 'Пользователя не существует', () => {
    //   enforce(data.email).equals(fakeApiStore.currentUser?.email) && enforce(data.password).equals(fakeApiStore.currentUser?.password);
    // });
  });
  const methods = useForm<UseFormType>({
    resolver: vestResolver(validationSchema),
    mode: 'onSubmit',
  });
  const { closePopover } = usePopover();
  const onSubmit = data => {
    //fakeApi
    console.log(data);
    setIsAuth(true);
  };
  const onRegistrationNavigate = e => {
    e.preventDefault();
    navigate('/registration');
  };
  const onRecoveryPasswordNavigate = e => {
    e.preventDefault();
    navigate('/recovery-password');
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} tw="flex flex-col gap-3 p-2 w-[250px]">
        <div tw="flex justify-between">
          <Button onClick={e => onRegistrationNavigate(e)} coloration="secondary">
            Регистрация
          </Button>
          <img tw="cursor-pointer" tabIndex={0} onClick={() => closePopover()} src={CloseIconBlue} />
        </div>
        <Input name="email" placeholder="Электронный адрес" />
        <Input name="password" isPassword={true} placeholder="Пароль" />
        <div tw="flex justify-between">
          <Button type="submit">Войти</Button>
          <Button onClick={e => onRecoveryPasswordNavigate(e)} coloration="secondary">
            Забыли пароль
          </Button>
        </div>
      </form>
    </FormProvider>
  );
});

const UserIsAuthorized = observer(
  ({ currentUser, setIsAuth }: { setIsAuth: (isAuth: boolean) => void; currentUser: { firstName: string; email: string } }) => {
    const { closePopover } = usePopover();
    const onExitUser = () => {
      setIsAuth(false);
      closePopover();
    };
    return (
      <div tw="p-2">
        <div tw="flex gap-2 pb-4">
          <div>
            <img src={Avatar} />
          </div>
          <div tw="flex flex-col text-[#446B80]">
            <span>{currentUser?.firstName}</span>
            <span tw="text-sm">{currentUser?.email}</span>
          </div>
        </div>

        <div tw="mb-1 pb-1" style={{ borderBottom: '1px solid rgba(34, 53, 64, 0.08)' }}>
          <Button tw="mb-2" coloration="secondary" iconLeft={<img src={CubeIcon} />}>
            Мои заказы
          </Button>
          <Button coloration="secondary" iconLeft={<img src={HeartIcon} />}>
            Мое избранное
          </Button>
        </div>
        <div>
          <Button tw="mb-2" coloration="secondary" iconLeft={<img src={SettingIcon} />}>
            Настройки личных данных
          </Button>
          <Button onClick={onExitUser} coloration="secondary" iconLeft={<img src={ExitIcon} />}>
            Выйти
          </Button>
        </div>
      </div>
    );
  },
);

const PopoverAuth = observer(() => {
  //TODO доделать после авторизации
  const [isAuth, setIsAuth] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ firstName: '', email: '' });

  React.useEffect(() => {
    if (fakeApiStore?.currentUser) {
      setIsAuth(true);
      setCurrentUser({ firstName: fakeApiStore?.currentUser?.firstName, email: fakeApiStore?.currentUser?.email });
    }
  }, [fakeApiStore?.currentUser]);
  return (
    <div>
      <Popover
        align="start"
        trigger={
          <Button iconLeft={<img src={IconHuman} />} coloration="secondary">
            {isAuth ? 'Личный кабинет' : 'Войти в личный кабинет'}
          </Button>
        }
        close={true}
      >
        {isAuth ? <UserIsAuthorized setIsAuth={setIsAuth} currentUser={currentUser} /> : <UserIsNotAuthorized setIsAuth={setIsAuth} />}
      </Popover>
    </div>
  );
});

export default PopoverAuth;
