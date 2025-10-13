import { Navigate, Outlet } from 'react-router-dom';

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburguer:user'),
  );

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
