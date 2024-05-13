import 'react';
import 'twin.macro';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Cards, Home, Registration, RecoveryPassword, Cart, Order } from '../pages';
import { ClassesInfo } from '../pages/Classes';
import { Header } from '../components';

const AppRouter = () => {
  return (
    <div tw="p-0">
      <BrowserRouter>
        <Header />
        <div tw="relative flex flex-col flex-1 pt-[140px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes-info" element={<ClassesInfo />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
