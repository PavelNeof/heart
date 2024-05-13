import 'react';
import tw from 'twin.macro';
import CarIcon from '../../assets/icons/car-ico.svg';
import DarkRubleIcon from '../../assets/icons/ruble-dark-ico.svg';
import { Button, SearchBar } from '../../components';
import React from 'react';
import styled, { css } from 'styled-components';

const PriceTag = ({ onClick, totalPrice, sale, setSale, delivery, quantityProducts, fullPrice, cart }) => {
  const RenderPriceRow = ({
    firstRow,
    borderBottom,
    price,
    amount,
  }: {
    firstRow?: boolean;
    borderBottom?: boolean;
    price: string | number;
    amount: React.ReactNode;
  }) => {
    return (
      <PriceRowWrapper css={[firstRow && tw`pb-4`]} borderBottom={borderBottom}>
        <span tw="text-start text-[#446B80]">{amount}</span>
        <div tw="text-[#446B80]">
          {price} <img src={DarkRubleIcon} />
        </div>
      </PriceRowWrapper>
    );
  };
  console.log('sale', sale);
  return (
    <div tw="flex flex-col gap-4 rounded w-[200px] p-4 h-fit outline outline-offset-0 outline-1 outline-[#22354014] rounded">
      {cart ? (
        <div tw="flex items-center justify-start">
          <img src={CarIcon} tw="pr-2" />
          <span tw="pr-1 text-[#446B80]">{delivery}</span>
          <img src={DarkRubleIcon} />
          <span tw="pl-2 text-[#446B80]">Доставка</span>
        </div>
      ) : (
        <div tw="flex items-center justify-between">
          <span tw="text-[#446B80]">Ваш заказ</span>
          <Button coloration="secondary" onClick={onClick}>
            Изменить
          </Button>
        </div>
      )}

      <SearchBar onButtonClick={e => e.toLowerCase() === 'промокод' && setSale('50')} placeholder="Промокод" name="Применить" />
      {sale && (
        <div tw="text-[#446B80] bg-[#ECC7C1] p-1 rounded">
          Вы применили промокод на скидку в размере {sale} <img src={DarkRubleIcon} />
        </div>
      )}
      <RenderPriceRow firstRow amount={<span>Количество ({quantityProducts})</span>} price={fullPrice} />
      {!cart && <RenderPriceRow firstRow borderBottom amount={<span>Доставка</span>} price={delivery} />}
      <RenderPriceRow amount={<span>Скидка</span>} price={sale ? sale : 0} />
      <RenderPriceRow amount={<span tw="text-lg">Итого</span>} price={totalPrice} />
      {cart && (
        <Button coloration={totalPrice === 0 ? 'disabled' : 'common'} onClick={onClick}>
          Перейти к оформлению
        </Button>
      )}
    </div>
  );
};
const PriceRowWrapper = styled.div<any>(({ borderBottom }) => {
  return css`
    &&& {
      ${tw`flex justify-between`}
      border-bottom: ${borderBottom && '1px solid rgba(34, 53, 64, 0.08)'};
    }
  `;
});
export default PriceTag;
