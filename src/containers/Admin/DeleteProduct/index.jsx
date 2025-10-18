import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../services/api';
import {
  ConfirmModal,
  Container,
  DeleteButton,
  ModalActions,
  ModalOverlay,
  ProductCategory,
  ProductImage,
  ProductInfo,
  ProductItem,
  ProductList,
  ProductName,
  ProductPrice,
} from './styles';

export function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch {
        toast.error('Erro ao carregar produtos!');
      }
    }
    loadProducts();
  }, []);

  function handleDeleteClick(product) {
    setSelectedProduct(product);
    setShowModal(true);
  }

  async function handleConfirmDelete() {
    try {
      await api.delete(`/products/${selectedProduct.id}`);
      setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      toast.success('Produto excluído com sucesso!');
    } catch {
      toast.error('Erro ao excluir produto!');
    } finally {
      setShowModal(false);
      setSelectedProduct(null);
    }
  }

  function handleCancelDelete() {
    setShowModal(false);
    setSelectedProduct(null);
  }

  return (
    <Container>
      <h1>Lista de produtos</h1>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.url} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductCategory>
                {product.category?.name || 'Sem categoria'}
              </ProductCategory>
              <ProductPrice>
                {product.price
                  ? `R$ ${(product.price / 100).toFixed(2)}`
                  : 'Preço não informado'}
              </ProductPrice>
            </ProductInfo>
            <DeleteButton
              title="Excluir produto"
              onClick={() => handleDeleteClick(product)}
            >
              <Trash2 size={22} />
            </DeleteButton>
          </ProductItem>
        ))}
      </ProductList>

      {showModal && (
        <ModalOverlay>
          <ConfirmModal>
            <h2>Confirmar exclusão</h2>
            <p>
              Tem certeza que deseja excluir
              <strong> {selectedProduct?.name}</strong>?
            </p>
            <ModalActions>
              <button onClick={handleConfirmDelete}>Sim, excluir</button>
              <button onClick={handleCancelDelete}>Cancelar</button>
            </ModalActions>
          </ConfirmModal>
        </ModalOverlay>
      )}
    </Container>
  );
}
