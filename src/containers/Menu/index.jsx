import { Banner, CategoryMenu, Container, ProductsContainer } from './styles';

export default function Menu() {
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

      <CategoryMenu></CategoryMenu>

      <ProductsContainer></ProductsContainer>
    </Container>
  );
}
