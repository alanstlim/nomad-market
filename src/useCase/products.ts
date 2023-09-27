import axios from 'axios';
import { FormProductData } from 'pages/product';
import { ProductType } from 'stores/products';

const API_KEY = '927ecb58b6f549719457350726cf2d84';

export const handleCreateProduct = async (data: FormProductData) => {
  const { data: response } = await axios.post(
    `https://crudcrud.com/api/${API_KEY}/product`,
    data
  );
  return response.data;
};

export const handleUpdateProduct = async (data: ProductType) => {
  const { data: response } = await axios.put(
    `https://crudcrud.com/api/${API_KEY}/product/${data._id}`,
    {
      name: data.name,
      description: data.description,
      image: data.image,
      price: data.price,
    } as FormProductData
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

export const handleDeleteProduct = async (id: string) => {
  const { data } = await axios.delete<ProductType>(
    `https://crudcrud.com/api/${API_KEY}/product/${id}`
  );
  return data;
};
