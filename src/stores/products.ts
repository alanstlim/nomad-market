import { create } from "zustand";

export type ProductType = {
  name: string;
  description: string;
  price: number;
  image: string;
};

type State = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
};

const useProductsStore = create<State>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
}));

export default useProductsStore;
