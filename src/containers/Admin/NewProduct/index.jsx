import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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
  name: yup.string().required('O nome é obrigatório!'),
  price: yup.number().positive().required().typeError('O preço é obrigatório!'),
  category: yup.object().required('A categoria é obrigatória!'),
  file: yup
    .mixed()
    .test('required', 'A imagem é obrigatória!', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'A imagem deve ter no máximo 5MB', (value) => {
      return value && value.length > 0 && value[0].size <= 5 * 1024 * 1024;
    })
    .test('type', 'A imagem deve ser PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
      );
    }),
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
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price * 100);
    formData.append('category_id', data.category.id);
    formData.append('file', data.file[0]);

    await toast.promise(
      api.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      {
        pending: 'Criando o produto...',
        success: 'Produto criado com sucesso!',
        error: '⚙️ Falha ao criar o produto! Tente novamente.',
      },
    );
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
            <ErrorMessage>{errors?.file?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
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
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          </InputGroup>

          <SubmitButton type="submit">Cadastrar produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
