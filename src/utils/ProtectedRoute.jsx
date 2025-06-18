import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, getRole } = useAuth();
  const role = getRole();

  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // Asegúrate que los roles coincidan (sin ROLE_)
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/inicio" replace />;
  }

  return children;
};

export default ProtectedRoute;