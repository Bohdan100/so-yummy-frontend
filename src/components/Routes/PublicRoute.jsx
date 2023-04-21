import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { token } = useAuth();
  
  return token ? <Navigate to={redirectTo} /> : <Component />;
}
