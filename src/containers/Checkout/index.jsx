import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: '#555' }}>
        <h3>Erro ao carregar o checkout 😔</h3>
        <p>Volte e tente novamente o pagamento.</p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
