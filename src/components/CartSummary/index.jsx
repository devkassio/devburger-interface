import { Button } from "../Button";
import { Container } from "./styles";

export function CartSummary() {
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens</p>
          <p className="itens-price">R$ 0,00</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">R$ 5,00</p>
        </div>
        <div className="container-bottom">
          <p className="">Total</p>
          <p className="" >R$ 0,00</p>
        </div>
      </Container>
      <Button>Finalizar compra</Button>
    </div>
  );
}
