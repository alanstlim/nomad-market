import axios from 'axios';
import { ProductType } from 'stores/products';

const API_KEY = 'ad4d242c82b74c87ad3a3cdb92dcefbe';

export const handleCreateProduct = async (data: ProductType) => {
  const { data: response } = await axios.post(
    `https://crudcrud.com/api/${API_KEY}/product`,
    data
  );
  return response.data;
};

export const handleGetAllProducts = async () => {
  const { data } = await axios.get<ProductType[]>(
    `https://crudcrud.com/api/${API_KEY}/product`
  );
  return data;
};

export const handleGetProductById = async (id: string) => {
  const { data } = await axios.get<ProductType>(
    `https://crudcrud.com/api/${API_KEY}/product/${id}`
  );
  return data;
};
