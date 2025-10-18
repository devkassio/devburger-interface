import ReactSelect from 'react-select';
import styled from 'styled-components';
import { Button } from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /*  min-height: 100vh; */
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 24px;
`;

export const Form = styled.form`
  border-radius: 20px;
  background-color: #484848;
  padding: 32px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #ddd;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  appearance: none;
`;

export const LabelUpload = styled.label`
  border: 1px dashed #ddd;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  color: #ddd;

  input[type='file'] {
    display: none;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Select = styled(ReactSelect)`
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)``;

export const ErrorMessage = styled.span`
  color: #cf3057;
  font-size: 12px;
  line-height: 80%;
  font-weight: 600;
  height: 10px;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  

  label {
    font-size: 14px;
    color: #ddd;
  }

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
