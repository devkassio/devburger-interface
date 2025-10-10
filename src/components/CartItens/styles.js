import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    background-color: #9758a6;
    transition: background-color 0.3s ease;
    flex-shrink: 0; /* impede quebra de linha */
  }

  button:hover {
    transform: scale(1.05);
  }

  /* Hover específico para cada botão */
  button.increase:hover {
    background-color: #28a745; /* verde */
  }

  button.decrease:hover {
    background-color: #dc3545; /* vermelho */
  }

  .quantity {
    display: inline-block;
    width: 24px; /* fixa o espaço */
    text-align: center;
  }
`;

export const TotalPrice = styled.span`
  transition: color 0.2s ease-in-out; /* transição suave da cor */
  font-weight: bold;
`;

export const EmptyCart = styled.tr`
  height: 400px; /* ajusta a altura da área vazia */
  text-align: center;

  td {
    border: none;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    width: 100%;
    animation: fadeIn 0.4s ease-in-out;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #777;
    max-width: 360px;
    line-height: 1.4;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export const CartTotalRow = styled.tr`
  text-align: center;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 16px 0;
  border-top: 2px solid #cdcdcd;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
   display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #9758a6;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 16px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #7d3f8c;
    transform: translateX(-3px);
  }

  svg {
    stroke-width: 2.5;
  }
`;

export const TrashImage = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  /* Tooltip */
  &::after {
    content: 'Deletar';
    position: absolute;
    bottom: 130%; /* aparece acima do ícone */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
    transform-origin: bottom;
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -4px);
  }
`;
