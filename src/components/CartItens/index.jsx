import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TrashIcon from '../../assets/trash.svg';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import {
  BackButton,
  ButtonContainer,
  ButtonGroup,
  CartTotalRow,
  EmptyCart,
  ProductImage,
  TotalPrice,
  TrashImage,
} from './styles';

import { ArrowLeft } from 'lucide-react';

export function CartItens() {
  const {
    cartProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const [colorByProduct, setColorByProduct] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const [previusPath, setPreviousPath] = useState('/');

  useEffect(() => {
    const from = sessionStorage.getItem('fromPage');
    if (from) {
      setPreviousPath(from);
    }
  }, []);

  const handleColorChange = (id, color) => {
    setColorByProduct((prev) => ({ ...prev, [id]: color }));
    setTimeout(() => {
      setColorByProduct((prev) => ({ ...prev, [id]: '#484848' }));
    }, 500);
  };

  const handleIncrease = (id) => {
    increaseProductQuantity(id);
    handleColorChange(id, '#28a745'); // verde
  };

  const handleDecrease = (id) => {
    decreaseProductQuantity(id);
    handleColorChange(id, '#dc3545'); // vermelho
  };

  const handleBack = () => {
    navigate(previusPath || '/');
  };

  const totalCart = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <div>
      {/* 🔹 Container do botão */}
      {cartProducts?.length === 0 && (
        <ButtonContainer>
          <BackButton onClick={handleBack}>
            <ArrowLeft size={18} />
            <span>Adicionar mais produtos</span>
          </BackButton>
        </ButtonContainer>
      )}

      {/* 🔹 Tabela */}
      <Table.Root>
        <Table.Header>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Itens</Table.Th>
            <Table.Th>Preço</Table.Th>
            <Table.Th>Quantidade</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Header>
        <Table.Body>
          {cartProducts?.length > 0 ? (
            cartProducts.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>
                  <ProductImage src={product.url} alt={product.name} />
                </Table.Td>
                <Table.Td>{product.name}</Table.Td>
                <Table.Td>{formatPrice(product.price)}</Table.Td>
                <Table.Td>
                  <ButtonGroup>
                    <button
                      className="decrease"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{product.quantity}</span>
                    <button
                      className="increase"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                  </ButtonGroup>
                </Table.Td>
                <Table.Td>
                  <TotalPrice
                    style={{ color: colorByProduct[product.id] || '#484848' }}
                  >
                    {formatPrice(product.price * product.quantity)}
                  </TotalPrice>
                </Table.Td>
                <Table.Td>
                  <TrashImage onClick={() => removeProductFromCart(product.id)}>
                    <img src={TrashIcon} alt="Remover produto" />
                  </TrashImage>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <EmptyCart>
              <td colSpan={6}>
                <div>
                  <div className="icon">🛒</div>
                  <h3>Seu carrinho está vazio</h3>
                  <p>Adicione produtos deliciosos e volte para saborear 😋</p>
                </div>
              </td>
            </EmptyCart>
          )}
        </Table.Body>
        {/* Total geral da tabela */}
        {cartProducts.length > 0 && (
          <CartTotalRow>
            <Table.Td colSpan={4}>Total do Carrinho:</Table.Td>
            <Table.Td>
              <TotalPrice>{formatPrice(totalCart)}</TotalPrice>
            </Table.Td>
          </CartTotalRow>
        )}
      </Table.Root>
    </div>
  );
}
