import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { formatPrice } from '../../utils/formatPrice';
import { CardImage, Container } from './styles';

export function CardProduct({ product }) {
  console.log(product);

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <CartButton></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
