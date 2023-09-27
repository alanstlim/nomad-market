import Button from 'components/Button';
import Card from 'components/Card';
import useProductsStore from 'stores/products';
import * as St from './styles';
import StripeContainer from 'components/StripeContainer';
import useModalStore from 'stores/modal';

const Basket: React.FC = () => {
  const productsStore = useProductsStore((state) => state);
  const openModal = useModalStore((state) => state.openModal);

  const handleModalPayment = () => {
    openModal({
      title: 'Payment',
      component: <StripeContainer />,
    });
  };
  return (
    <St.Content>
      <St.Title>Basket</St.Title>
      <St.Catalog>
        {productsStore?.products?.length > 0 ? (
          productsStore.products?.map((product) => (
            <Card
              key={product._id}
              data={product}
              variant="negative"
              onMinuslickButton={() => productsStore.minusProduct(product._id)}
              onPlusClickButton={() => productsStore.addProduct(product)}
            />
          ))
        ) : (
          <St.Description>Basket Empty...</St.Description>
        )}
      </St.Catalog>
      <St.BottomContainer>
        <Button
          title="Checkout"
          type="button"
          onClick={handleModalPayment}
          disabled={productsStore.products.length < 1}
        />
      </St.BottomContainer>
    </St.Content>
  );
};

export default Basket;
