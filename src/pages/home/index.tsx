import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import useProductsStore, { ProductType } from 'stores/products';
import * as St from './styles';
import { handleGetAllProducts } from 'useCase/products';
import { useQuery } from '@tanstack/react-query';
import { useSpinner } from 'context/SpinnerContext';
import { useCallback, useEffect, useState } from 'react';
import useModalStore from 'stores/modal';
import useSearchStore from 'stores/search';

const Home: React.FC = () => {
  const [productsList, setProdcutsList] = useState<ProductType[]>([]);

  const { setLoading } = useSpinner();
  const openModal = useModalStore((state) => state.openModal);
  const addProduct = useProductsStore((state) => state.addProduct);
  const searchText = useSearchStore((state) => state.text);
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

  const searchFilterList = useCallback(
    (text: string) => {
      if (data) {
        const filteredList: ProductType[] = data.filter((product) => {
          const productName = product.name.toLowerCase();
          const textData = text.toLowerCase();
          return productName.includes(textData) && product;
        });

        setProdcutsList(filteredList);
      }
    },
    [data]
  );

  useEffect(() => {
    searchFilterList(searchText);
  }, [searchText]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <St.Content>
      <St.Title>Products</St.Title>
      <SearchBar />

      <St.Catalog>
        {productsList?.length > 0 ? (
          productsList?.map((product) => (
            <Card
              key={product._id}
              data={product}
              onPlusClickButton={() => handleAddProduct(product)}
            />
          ))
        ) : (
          <St.Description>Anyone product registered...</St.Description>
        )}
      </St.Catalog>
    </St.Content>
  );
};

export default Home;
