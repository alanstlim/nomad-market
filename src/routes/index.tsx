import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Template from 'template';
import Product from 'pages/product';
import Management from 'pages/management/Management';
import Basket from 'pages/basket';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="management" element={<Management />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default Router;
