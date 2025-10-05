import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-left: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #61a120;
  padding-bottom: 12px;
  text-align: center;
  position: relative;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: #61a120;
  }
`;
