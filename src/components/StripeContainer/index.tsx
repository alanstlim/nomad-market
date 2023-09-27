import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from 'components/PaymentForm';

const PUBLIC_KEY =
  'pk_test_51NuYuICKx54SGhcldAT3tsK0PpS6pOegru0S1x8ksgCRzPlIWlEOVeMUb4CBQRBynBaFMsadVUHx5QEEAVjXCrJH00jBDlFlSf';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
