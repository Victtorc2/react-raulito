import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ correo: email, password });
      
      Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        navigate('/inicio', { replace: true });
      });
      
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Credenciales incorrectas',
        icon: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
};

export default Login;