import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from 'components/Button';
import { useMemo, useState } from 'react';
import useProductsStore from 'stores/products';
import * as St from './styles';
import { MdCheckCircle } from 'react-icons/md';
import THEMES from 'styles/theme';

export default function PaymentForm() {
  const productsStore = useProductsStore((state) => state);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const totalPrice = useMemo(() => {
    const arrayTotal = productsStore.products.map(
      (product) => product.price * product.quantity
    );
    return arrayTotal.reduce((previous, current) => previous + current, 0);
  }, [productsStore]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (elements && stripe) {
      const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements?.getElement(CardElement)!,
      });
      if (!error) {
        setSuccess(true);
        productsStore.clearProducts();
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      {!success ? (
        <form data-testid="form" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <St.PaymentContainer className="FormRow">
              <CardElement data-testid="cardElement" />
            </St.PaymentContainer>
          </fieldset>
          <St.BottomContainer>
            <St.TotalValue data-testid="value">
              Total Value: ${totalPrice}
            </St.TotalValue>
            <Button title="Pay" type="submit" outline />
          </St.BottomContainer>
        </form>
      ) : (
        <St.Container>
          <MdCheckCircle size={60} color={THEMES.colors.primary} />
          <h2>Congratulations to buy on the best supermarket.</h2>
        </St.Container>
      )}
    </>
  );
}
