import { SignOutIcon } from '@phosphor-icons/react/dist/ssr';
import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext'
import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { useResolvedPath } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function SidNavAdmin() {
  const { logout } = useUser();
  const {pathname} = useResolvedPath();
  const navigate = useNavigate();
  
  return (
    <Container>
      <img src={Logo} alt="Hamburguer Logo DevBurger " onClick={() => navigate('/')} />
      <NavLinkContainer>
        {navLinks.map((navLink) => (
          <NavLink key={navLink.id} to={navLink.path} isActive={pathname === navLink.path}>
            {navLink.icon}
            <span>{navLink.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon fill="#fff" size={32} />
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
