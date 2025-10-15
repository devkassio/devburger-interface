import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #363636;

  img {
    width: 60%;
    margin: 40px 0;
   /*  margin: 60px auto; */
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border-radius: 10px;

  span {
    font-size: 1rem;
  }

  &:hover {
    background-color: #9758a6;
    transform: scale(1.03);
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
