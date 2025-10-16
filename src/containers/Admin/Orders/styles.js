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
