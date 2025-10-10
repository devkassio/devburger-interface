import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styles';

export function CartSummary() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllProducts = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllProducts);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));
    try {
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
          navigate('/');
        }, 2000);
        toast.success('Pedido realizado com sucesso!');
      } else if (status === 400) {
        toast.error('⚙️ Falha no sistema! Tente novamente.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('⚙️ Falha no sistema! Tente novamente.');
    }

  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens</p>
          <p className="itens-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar compra</Button>
    </div>
  );
}
