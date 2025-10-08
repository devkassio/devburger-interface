import styled from 'styled-components';

import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 60px;
  padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;

  div {
    margin-left: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  hr {
    border: 0.5px solid #625e5e;
    height: 20px;
  }
`;

export const HeaderLink = styled(LinkRouter)`
  text-decoration: none;
  border-bottom: ${(props) => (props.$isActive ? '1px solid #9758a6' : 'none')};
  color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
  font-size: 16px;
  transition: color 200ms;

  &:hover {
    color: #9758a6;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  p {
    color: #fff;
    font-weight: 300;
    line-height: 90%;
  }
  span {
    font-weight: 600;
    color: #9758a6;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 600;
  background-color: transparent;
  border: none;
`;
