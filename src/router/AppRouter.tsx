import 'react';
import 'twin.macro';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages';
import { ClassesInfo } from '../pages/Classes';

const AppRouter = () => {
  return (
    <div tw="p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes-info" element={<ClassesInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
