import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

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
`;

export const TotalPrice = styled.span`
  transition: color 0.2s ease-in-out; /* transição suave da cor */
  font-weight: bold;
`;

export const EmptyCart = styled.p`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: #555;
  margin: 2rem 0;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

export const TrashImage = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
