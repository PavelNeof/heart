import React from 'react';
import PriceTag from '../Cart/PriceTag';
import { observer } from 'mobx-react-lite';
import fakeApiStore from '../../common/fakeApiStore';

const Order = observer(() => {
  const [sale, setSale] = React.useState('');
  React.useEffect(() => {
    fakeApiStore.characteristicsForOrder && setSale(fakeApiStore.characteristicsForOrder.sale);
  }, [fakeApiStore.characteristicsForOrder]);

  const totalPrice =
    fakeApiStore.characteristicsForOrder &&
    (fakeApiStore.characteristicsForOrder.quantityProducts > 0
      ? fakeApiStore.characteristicsForOrder?.fullPrice +
        +(fakeApiStore.characteristicsForOrder?.delivery !== null ? fakeApiStore.characteristicsForOrder?.delivery : 0) -
        +(sale !== null ? sale : 0)
      : 0);

  return (
    <div>
      <PriceTag
        onClick={() => console.log('изменить')}
        totalPrice={totalPrice}
        sale={sale}
        setSale={setSale}
        delivery={fakeApiStore.characteristicsForOrder?.delivery}
        quantityProducts={fakeApiStore.characteristicsForOrder?.quantityProducts}
        fullPrice={fakeApiStore.characteristicsForOrder?.fullPrice}
        cart={false}
      />
    </div>
  );
});

export default Order;
