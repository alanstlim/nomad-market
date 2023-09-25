import { Maybe } from 'yup';
import { create } from 'zustand';

export type ProductType = {
  id?: Maybe<string | undefined>;
  name: string;
  description: string;
  price: number;
  image: string;
};

type State = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
};

const useProductsStore = create<State>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
  removeProduct: (target) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== target.id),
    }));
  },
}));

export default useProductsStore;
