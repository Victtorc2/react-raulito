import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setUser({ token, role });
    }
    setLoading(false);
  }, []);

// Agrega este console.log para depuración:
const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', credentials);
    const { token, role } = response.data;
    
    console.log('Datos recibidos del backend:', { token, role }); // ← Agrega esto
    
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    setUser({ token, role });
    return true;
  } catch (error) {
    console.error('Error en login:', error.response?.data);
    throw error;
  }
};

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
  };

  const isLoggedIn = () => !!user;
  const getRole = () => user?.role;

  return (
    <AuthContext.Provider value={{ 
      user,
      login,
      logout,
      isLoggedIn,
      getRole,
      loading
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);