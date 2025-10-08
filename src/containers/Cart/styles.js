import styled from 'styled-components';
import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
  background-position: center;
  height: 100vh;
`;

export const Banner = styled.div`
  background: url(${Texture});
  display: flex;
  align-items: center;
  justify-content: center;

  height: 180px;

  img {
    height: 160px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 12px;
  color: #61a120;
  position: relative;
  text-align: center;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 3px;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  max-width: 1280px;
  gap: 32px;
  padding: 40px;
  margin: 0 auto;
`;
