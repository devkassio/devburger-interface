import { ShoppingCart, User } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom'; // useLocation para pegar a rota atual e setar o isActive, resolveu o problema. Ao inves de usar o useResolvedPath que não funcionou
import { useUser } from '../../hooks/UserContext';

import {
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, user } = useUser();

  const path = useLocation().pathname;

  function handleLogout() {
    logout();
    navigate('/login');
  }

  console.log(user);

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={path === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={path === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <User color="#fff" size={24} />
            <div>
              <p>
                Olá, <span onClick={() => navigate('/admin/pedidos')}>{user?.name}</span>
              </p>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#fff" size={24} /> {/* Mudar o icone*/}
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
          <Logout onClick={handleLogout}>Sair</Logout>
        </Options>
      </Content>
    </Container>
  );
}
