import React from 'react';
import { observer } from 'mobx-react-lite';
import Product from './Product';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import fakeApiStore from '../../common/fakeApiStore';
import PriceTag from '../Cart/PriceTag';

const Cart = observer(() => {
  const [delivery, setDelivery] = React.useState<null | string>(null);
  const [sale, setSale] = React.useState<null | string>(null);
  React.useEffect(() => {
    setDelivery('154');
  }, []);
  const navigate = useNavigate();
  const quantityProducts = fakeApiStore?.mockProducts.reduce((acc, item) => acc + (item.inStock ? Number(item.count) : 0), 0);
  const fullPrice = fakeApiStore?.mockProducts.reduce((acc, item) => acc + (item.inStock ? Number(item.price) * +item.count : 0), 0);
  const totalPrice = quantityProducts > 0 ? fullPrice + +(delivery !== null ? delivery : 0) - +(sale !== null ? sale : 0) : 0;

  const onNavigate = () => {
    console.log(fakeApiStore.mockProducts);
    console.log(delivery);
    fakeApiStore.updateCharacteristicsForOrder({
      sale: sale,
      delivery: delivery,
      quantityProducts: quantityProducts,
      totalPrice: totalPrice,
      fullPrice: fullPrice,
    });
    navigate('/order');
  };

  return (
    <div tw="w-full">
      <div tw="max-w-[1400px] m-auto">
        <div tw="flex justify-between items-center">
          <h1 tw="text-[#446B80]">В корзине {fakeApiStore?.mockProducts.length} товара</h1>
          <Button tw="h-9" onClick={() => navigate('/')}>
            На главную
          </Button>
        </div>
        <div tw="flex">
          <div tw="w-[800px] pr-10">
            {fakeApiStore?.mockProducts.map((item, index) => (
              <Product item={item} index={index} />
            ))}
          </div>
          <PriceTag
            onClick={onNavigate}
            totalPrice={totalPrice}
            sale={sale}
            setSale={setSale}
            delivery={delivery}
            quantityProducts={quantityProducts}
            fullPrice={fullPrice}
            cart
          />
        </div>
      </div>
    </div>
  );
});

export default Cart;
