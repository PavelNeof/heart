import React from 'react';
import tw from 'twin.macro';
import { SearchBar } from '..';
import { Button } from '../Button';

import BurgerMenuIcon from '../../assets/icons/menu-burger-ico.svg';
import CartIcon from '../../assets/icons/cart-ico.svg';
import MarksIcon from '../../assets/icons/marks-ico.svg';
import PopoverAuth from './local-component/PopoverAuth';

const Header = () => {
  const [city, setCity] = React.useState('');
  React.useEffect(() => {
    setCity('Москва');
  }, []);

  return (
    <Wrapper>
      <div tw="flex justify-between py-2" style={{ borderBottom: '1px solid rgba(34, 53, 64, 0.08)' }}>
        <Button iconRight={<img src={BurgerMenuIcon} />}>Каталог товаров</Button>
        <SearchBar onButtonClick={v => console.log(v)} />
        <PopoverAuth />

        <Button iconLeft={<img src={CartIcon} />} count={4} coloration="secondary">
          Корзина
        </Button>
      </div>
      <div tw="pt-2 flex justify-between items-center">
        <label tw="w-24 px-2 py-0.5 flex items-center z-10 bg-[#F2F2F2] rounded text-[#446B80]">Онлайн гипермаркет карт</label>
        <div tw="flex gap-1">
          <Button coloration="secondary">Акции</Button>
          <Button coloration="secondary">О нас</Button>
          <Button coloration="secondary">Блог</Button>
          <Button coloration="secondary">Оптовым клиентам</Button>
          <Button coloration="secondary">Возврат</Button>
          <Button coloration="secondary">Оплата и доставка</Button>
          <Button coloration="secondary">Контакты</Button>
        </div>
        <div tw="flex items-center gap-1 mb-4">
          <img src={MarksIcon} />
          <span>Город:</span>
          <City>{city}</City>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = tw.span`fixed bg-[#fafcfd] h-[140px] top-0 left-[50px] right-[50px] w-[calc(100% - 100px)] z-50 items-center`;
const City = tw.span`rounded border-2 border-solid border-none cursor-pointer bg-[#fafcfd] flex items-center pl-1 text-[#7FC9F0] hover:(underline)`;
export default Header;
