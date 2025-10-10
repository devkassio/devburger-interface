import { useState } from 'react';
import TrashIcon from '../../assets/trash.svg';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import {
  ButtonGroup,
  EmptyCart,
  ProductImage,
  TotalPrice,
  TrashImage,
} from './styles';

export function CartItems() {
  const {
    cartProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const [colorByProduct, setColorByProduct] = useState({});

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

  const totalCart = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Items</Table.Th>
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
              <Table.Td>{product.price}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button
                    className="decrease"
                    onClick={() => handleDecrease(product.id)}
                  >
                    -
                  </button>
                  {product.quantity}
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
                <TrashImage
                  src={TrashIcon}
                  alt="Remover produto"
                  onClick={() => removeProductFromCart(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>
            <span>Ops! Seu carrinho está vazio 😔</span>
          </EmptyCart>
        )}
      </Table.Body>
      {/* Total geral da tabela */}
      {cartProducts.length > 0 && (
        <Table.Tr>
          <Table.Td
            colSpan={4}
            style={{ textAlign: 'right', fontWeight: 'bold' }}
          >
            Total do Carrinho:
          </Table.Td>
          <Table.Td>
            <TotalPrice>{formatPrice(totalCart)}</TotalPrice>
          </Table.Td>
        </Table.Tr>
      )}
    </Table.Root>
  );
}
