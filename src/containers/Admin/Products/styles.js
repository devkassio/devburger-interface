import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*  min-height: 100vh; */
  width: 100%;
  margin: 32px auto;
`;

export const ProductImage = styled.img`
  height: 100px;
  object-fit: cover;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #6f3576;
  }
`;
