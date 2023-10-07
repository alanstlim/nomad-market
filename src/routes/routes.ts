import Basket from 'pages/basket';
import Home from 'pages/home';
import Management from 'pages/management/Management';
import Product from 'pages/product';

export const ROUTES = [
  {
    element: Home,
    title: 'Catalogue',
    path: '/',
    sidebar: true,
    icon: 'MdViewModule',
  },
  {
    element: Basket,
    title: 'Basket',
    path: 'basket',
    sidebar: true,
    icon: 'MdShoppingBasket',
  },
  {
    element: Management,
    title: 'Management',
    path: 'management',
    sidebar: true,
    icon: 'MdManageAccounts',
  },
  {
    element: Product,
    title: 'Product',
    path: 'product',
    sidebar: false,
  },
  {
    element: Product,
    title: 'Product',
    path: 'product/:id',
    sidebar: false,
  },
];
