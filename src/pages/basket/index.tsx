import Button from 'components/Button';
import Card from 'components/Card';
import useProductsStore from 'stores/products';
import * as St from './styles';

const Basket: React.FC = () => {
  const products = useProductsStore((state) => state.products);
  return (
    <St.Content>
      <St.Title>Basket</St.Title>
      <St.Catalog>
        {products?.map((product) => <Card data={product} variant="negative" />)}
      </St.Catalog>
      <Button title="Checkout" type="button" />
    </St.Content>
  );
};

export default Basket;
