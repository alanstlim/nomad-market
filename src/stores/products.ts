import { create } from 'zustand';

export type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

type State = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (id: string) => void;
};

const useProductsStore = create<State>((set) => ({
  products: [],
  addProduct: (target) => {
    set((state) => {
      const indexBasket = state.products
        .map((item) => {
          return item._id;
        })
        .indexOf(target._id);

      if (indexBasket > -1 && state.products[indexBasket].quantity < 10) {
        state.products[indexBasket].quantity += 1;
        return { products: state.products };
      } else if (indexBasket < 0) {
        return { products: [...state.products, { ...target, quantity: 1 }] };
      }

      return {};
    });
  },
  removeProduct: (id) => {
    set((state) => {
      const indexBasket = state.products
        .map((item) => {
          return item._id;
        })
        .indexOf(id);

      if (state.products[indexBasket].quantity > 1) {
        state.products[indexBasket].quantity -= 1;
        return { products: state.products };
      } else {
        state.products.splice(indexBasket, 1);
        return { products: [...state.products] };
      }
    });
  },
}));

export default useProductsStore;
