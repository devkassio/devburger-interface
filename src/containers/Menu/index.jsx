import { useEffect, useState } from 'react';
import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBÚRGUER
          <br />
          ESTÁ AQUI!
          <span>Faça seu pedido e receba no conforto da sua casa</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton key={category.id}>{category.name}</CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
