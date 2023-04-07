import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
