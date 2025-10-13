import { Navigate, Outlet } from 'react-router-dom';
import { SidNavAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburguer:user'),
  );

  return isAdmin ? (
    <Container>
      <SidNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/" />
  );
}
