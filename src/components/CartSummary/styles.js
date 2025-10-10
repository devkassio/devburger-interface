import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: #484848;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'itens itens-price'
      'delivery-tax delivery-tax-price';
  }

  .title {
    grid-area: title;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;

    background-color: #484848;
    color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .itens {
    grid-area: itens;
    padding-left: 20px;
  }

  .itens-price {
    grid-area: itens-price;
    padding-right: 20px;

  }

  .delivery-tax {
    grid-area: delivery-tax;
    padding-left: 20px;

  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
    padding-right: 20px;

  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;
    font-size: 20px;

    p:last-child {
      color: #9758a6;
    }

    * {
      font-weight: bold;
    }
  }
`;
