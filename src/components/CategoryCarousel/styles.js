import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #9758a6;
  padding-bottom: 12px;
  text-align: center;
  position: relative;
  margin-bottom: 40px;
  margin-top: 5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: #9758a6;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;

  p {
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    padding: 10px 30px;
    font-weight: 600;
    margin-top: 120px;
    color: #ffffff;
    text-shadow:
      0 2px 8px #9758a6,
      0 1px 2px #000;
  }
`;
