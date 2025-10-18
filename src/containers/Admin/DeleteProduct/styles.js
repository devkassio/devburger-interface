import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 32px auto;
  padding: 32px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 32px;
    color: #484848;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ProductList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 16px 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 24px;
  background: #eaeaea;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #484848;
`;

export const ProductCategory = styled.span`
  font-size: 0.95rem;
  color: #6f3576;
`;

export const ProductPrice = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #cf3057;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.15s;

  &:hover {
    background: #ffe6ea;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ConfirmModal = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  min-width: 320px;
  text-align: center;

  h2 {
    margin-bottom: 12px;
    color: #cf3057;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 24px;
    color: #484848;
    font-size: 1rem;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  button {
    padding: 8px 20px;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }

  button:first-child {
    background: #cf3057;
    color: #fff;

    &:hover {
      background: #a8233e;
    }
  }

  button:last-child {
    background: #eee;
    color: #484848;

    &:hover {
      background: #ddd;
    }
  }
`;
