import Button from 'components/Button';
import Card from 'components/Card';
import useProductsStore from 'stores/products';
import * as St from './styles';
import { useMemo } from 'react';

const Basket: React.FC = () => {
  const productsStore = useProductsStore((state) => state);

  const totalPrice = useMemo(() => {
    const arrayTotal = productsStore.products.map(
      (product) => product.price * product.quantity
    );
    return arrayTotal.reduce((previous, current) => previous + current, 0);
  }, [productsStore]);

  return (
    <St.Content>
      <St.Title>Basket</St.Title>
      <St.Catalog>
        {productsStore.products?.map((product) => (
          <Card
            key={product._id}
            data={product}
            variant="negative"
            onMinuslickButton={() => productsStore.removeProduct(product._id)}
            onPlusClickButton={() => productsStore.addProduct(product)}
          />
        ))}
      </St.Catalog>
      <St.BottomContainer>
        <St.TotalValue>Total Value: ${totalPrice}</St.TotalValue>
        <Button title="Checkout" type="button" />
      </St.BottomContainer>
    </St.Content>
  );
};

export default Basket;
