import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../../services/api';
import {
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton, // Corrigido: importar SubmitButton
} from './styles';

const schema = yup.object({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  category: yup.object().required(),
  file: yup.mixed(),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input type="number" {...register('price')} />
            <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <LabelUpload>
              <Image size={24} />
              <input
                type="file"
                {...register('file')}
                accept="image/png, image/jpeg"
                onChange={(value) => {
                  setFileName(value.target.files[0]?.name);
                  register('file').onChange(value);
                }}
              />
              {fileName || 'Nenhum arquivo selecionado'}
            </LabelUpload>
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <Controller
              name="category"
              control={control}
              render={(field) => (
                <Select
                  {...field}
                  options={categories}
                  getOptionLabel={(categories) => categories.name}
                  getOptionValue={(categories) => categories.id}
                  placeholder="Escolha a categoria"
                  mmenuPortalTarget={document.body}
                />
              )}
            />
          </InputGroup>

          <SubmitButton type="submit">Cadastrar produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
