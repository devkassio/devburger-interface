import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
  table-layout: fixed; /* impede quebra de linha */
`;

export const Header = styled.thead``;

export const Tr = styled.tr`
  border-bottom: #cdcdcd 1px solid;

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: #cdcdcd 1px solid;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;

  &:nth-child(1) { width: 100px; } /* imagem */
  &:nth-child(2) { width: 240px; } /* nome */
  &:nth-child(3) { width: 100px; } /* preço */
  &:nth-child(4) { width: 140px; } /* quantidade */
`;

export const Body = styled.tbody``;