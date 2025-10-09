import { useCart } from '../../hooks/CartContext';
import { Table } from '../index';

export function CartItems() {
  const { cartProducts, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Items</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length > 0
          ? cartProducts.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>
                  <img src={product.url} alt={product.name} />
                </Table.Td>
                <Table.Td>{product.name}</Table.Td>
                <Table.Td>{product.price}</Table.Td>
                <Table.Td>
                  <button onClick={() => decreaseProductQuantity(product.id)}>
                    -
                  </button>
                  {product.quantity}
                  <button onClick={() => increaseProductQuantity(product.id)}>
                    +
                  </button>
                </Table.Td>
                <Table.Td>{product.price * product.quantity}</Table.Td>
              </Table.Tr>
            ))
          : null}
      </Table.Body>
    </Table.Root>
  );
}
