import Logo from '../../assets/logo.svg';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} className="logo" alt="" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        {/*  <CartItems />
        <CartSummary /> */}
      </Content>
    </Container>
  );
}
