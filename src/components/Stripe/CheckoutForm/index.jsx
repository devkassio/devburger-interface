import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import './styles.css';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou elements não estão disponíveis');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((product) => ({
          id: product.id,
          quantity: product.quantity,
          price: product.price,
        }));

        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );

        if (status === 201 || status === 200) {
          setTimeout(() => {
            clearCart();
            navigate(
              `/pedido-finalizado?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);
          toast.success('Pedido realizado com sucesso!');
        } else if (status === 400) {
          toast.error('⚙️ Falha no sistema! Tente novamente.');
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error('⚙️ Falha no sistema! Tente novamente.');
      }
    } else {
      navigate(
        `/pedido-finalizado?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className="container">
      <h2 className="payment-title">Pagamento</h2>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner"></div> : 'Pagar agora'}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>

      <div className="checkout-info">
        <p>
          Os métodos de pagamento são disponíveis apenas para
          <strong> Cartão de débito</strong> e
          <strong> Cartão de crédito</strong>.
        </p>
        <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
          Verificar integração
        </a>
      </div>
    </div>
  );
}
