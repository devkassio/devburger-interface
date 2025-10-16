import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton, // Corrigido: importar SubmitButton
} from './styles';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <LabelUpload>
              <Image size={24} />
              <input type="file" />
            </LabelUpload>
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <Select />
          </InputGroup>

          <SubmitButton type="submit">Cadastrar produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
