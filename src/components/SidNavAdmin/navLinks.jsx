import { List, ListPlus, ReceiptText as Receipt, Trash2 } from 'lucide-react';

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon: <Receipt />,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/admin/produtos',
    icon: <List />,
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: '/admin/novo-produto',
    icon: <ListPlus />,
  },
  {
    id: 4,
    label: 'Excluir Produto',
    path: '/admin/excluir-produto',
    icon: <Trash2 />,
  },
];
