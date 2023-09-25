import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import useProductsStore from 'stores/products';
import * as St from './styles';
import { handleGetAllProducts } from 'useCase/products';
import { useQuery } from '@tanstack/react-query';
import { useSpinner } from 'context/SpinnerContext';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const { setLoading } = useSpinner();
  const addProduct = useProductsStore((state) => state.addProduct);

  const { isLoading, data } = useQuery({
    queryKey: ['getAll'],
    queryFn: handleGetAllProducts,
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <St.Content>
      <St.Title>Products</St.Title>
      <SearchBar />

      <St.Catalog>
        {data?.map((product) => (
          <Card data={product} onClickButton={() => addProduct(product)} />
        ))}
      </St.Catalog>
    </St.Content>
  );
};

export default Home;
