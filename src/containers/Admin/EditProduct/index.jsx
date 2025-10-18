import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
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
  SubmitButton,
  ContainerCheckbox,
} from './styles';

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório!'),
  price: yup.number().positive().required().typeError('O preço é obrigatório!'),
  offer: yup.bool(),
  category: yup.object().required('A categoria é obrigatória!'),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const {
    state: { product },
  } = useLocation();

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
    formData.append('offer', data.offer);

    await toast.promise(
      api.put(`/products/${product.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      {
        pending: 'Editando o produto...',
        success: 'Produto editado com sucesso!',
        error: '⚙️ Falha ao editar o produto! Tente novamente.',
      },
    );
    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              defaultValue={product.name}
            />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label>Preço</Label>
            <Input
              type="number"
              {...register('price')}
              defaultValue={product.price / 100}
            />
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
              defaultValue={product.category}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categories}
                  getOptionLabel={(categories) => categories.name}
                  getOptionValue={(categories) => categories.id}
                  placeholder="Escolha a categoria"
                  mmenuPortalTarget={document.body}
                  defaultValue={product.category}
                />
              )}
            />
            <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          </InputGroup>

          <InputGroup>
            <ContainerCheckbox>
              <input type="checkbox" defaultChecked={product.offer} {...register('offer')} />
              <Label>Produto em oferta ?</Label>
            </ContainerCheckbox>
          </InputGroup>

          <SubmitButton type="submit">Editar produto</SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
