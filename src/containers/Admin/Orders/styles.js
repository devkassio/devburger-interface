import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const selectCustomStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    boxShadow: 'none',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#a855f7' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    ':hover': {
      backgroundColor: '#f3e8ff',
    },
  }),
  menu: (base) => ({
    ...base,
    overflow: 'hidden',
  }),
};

export const FilterOptions = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => (props.$isActiveStatus ? '2px solid #9758a6' : 'none')};
  color: ${(props) => (props.$isActiveStatus ? '#9758a6' : '#484848')};
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 5px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;
