import React from 'react';
import 'twin.macro';
import RubleIcon from '../../assets/icons/ruble-ico.svg';
import TrashIcon from '../../assets/icons/trash-ico.svg';
import HeartIcon from '../../assets/icons/heart-ico.svg';
import MinusIcon from '../../assets/icons/minus-ico.svg';
import PlusIcon from '../../assets/icons/plus-ico.svg';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { observer } from 'mobx-react-lite';
import fakeApiStore from '../../common/fakeApiStore';

type ProductType = {
  item: { img: string; productId: string; price: string; name: string; count: number | string; inStock: boolean; id: string };
  index: number;
};

const Product = observer(({ item, index }: ProductType) => {
  const [count, setCount] = React.useState(1);

  const deleteProduct = ({ id }: { id: string }) => {
    fakeApiStore.deleteMockProduct(id);
  };
  const addCount = item => {
    setCount(count + 1);
    fakeApiStore.addMockCountProducts(item);
  };
  const deleteCount = ({ id }: { id: string }) => {
    const number = count - 1;
    fakeApiStore.deleteMockCountProducts(id);
    setCount(number);
  };

  return (
    <ProductWrapper index={index} css={[item.inStock ? tw`` : tw`bg-zinc-100/70 opacity-70`]}>
      <div tw="flex gap-4">
        <div>image</div>
        <div tw="flex flex-col justify-between items-start w-[300px] gap-2">
          <span tw="text-[#446B80]">{item.name}</span>
          <div>{item.inStock ? <span tw="text-[#7FC9F0]">В наличии</span> : <span tw="text-red-400">Нет товара</span>}</div>
        </div>
      </div>

      <div tw="flex items-start gap-4 min-w-[160px]">
        <div tw="flex gap-2 py-0.5 px-2 h-8 items-center outline outline-offset-0 outline-1 outline-[#446B80] rounded">
          <img tw="cursor-pointer" tabIndex={0} src={MinusIcon} onClick={() => deleteCount(item)} />
          <div tw="text-lg">{count}</div>
          <img tw="cursor-pointer" tabIndex={0} src={PlusIcon} onClick={() => addCount(item)} />
        </div>

        <div tw="text-[#7FC9F0] pt-1">
          <span tw="text-lg">{+item.price * count}</span> <img src={RubleIcon} />
        </div>
      </div>

      <div tw="flex flex-col gap-3">
        <img src={HeartIcon} tw="cursor-pointer" tabIndex={0} />
        <img onClick={() => deleteProduct(item)} src={TrashIcon} tw="cursor-pointer" tabIndex={0} />
      </div>
    </ProductWrapper>
  );
});

const ProductWrapper = styled.div<any>(({ index }) => {
  return css`
    &&& {
      ${tw`flex max-w-[800px] min-h-[100px] justify-between py-2 px-1`}
      border-bottom: 1px solid rgba(34, 53, 64, 0.08);
      border-top: ${index === 0 && '1px solid rgba(34, 53, 64, 0.08)'};
    }
  `;
});
export default Product;
