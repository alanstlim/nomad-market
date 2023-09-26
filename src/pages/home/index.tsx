import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import useProductsStore, { ProductType } from 'stores/products';
import * as St from './styles';
import { handleGetAllProducts } from 'useCase/products';
import { useQuery } from '@tanstack/react-query';
import { useSpinner } from 'context/SpinnerContext';
import { useEffect } from 'react';
import useModalStore from 'stores/modal';

const Home: React.FC = () => {
  const { setLoading } = useSpinner();
  const openModal = useModalStore((state) => state.openModal);
  const addProduct = useProductsStore((state) => state.addProduct);

  const { isLoading, data } = useQuery({
    queryKey: ['getAll'],
    queryFn: handleGetAllProducts,
  });

  const handleAddProduct = (product: ProductType) => {
    addProduct(product);

    openModal({
      title: 'Success',
      variant: 'success',
      message: 'Product added with success',
    });
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <St.Content>
      <St.Title>Products</St.Title>
      <SearchBar />

      <St.Catalog>
        {data?.map((product) => (
          <Card
            data={product}
            onPlusClickButton={() => handleAddProduct(product)}
          />
        ))}
      </St.Catalog>
    </St.Content>
  );
};

export default Home;
