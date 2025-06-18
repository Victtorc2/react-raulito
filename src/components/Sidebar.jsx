import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout, getRole } = useAuth();
  const role = getRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><Link to="/inicio">Inicio</Link></li>
        {(role === 'ADMIN' || role === 'EMPLEADO') && <li><Link to="/inventario">Inventario</Link></li>}
        {(role === 'ADMIN' || role === 'EMPLEADO') && <li><Link to="/ventas">Ventas</Link></li>}
        {role === 'ADMIN' && <li><Link to="/admin/productos">Productos</Link></li>}
        {role === 'ADMIN' && <li><Link to="/admin/usuarios">Usuarios</Link></li>}
        {role === 'ADMIN' && <li><Link to="/admin/auditoria">Auditoría</Link></li>}
        {role === 'ADMIN' && <li><Link to="/admin/reportes">Reportes</Link></li>}
        <li><button onClick={handleLogout}>Cerrar sesión</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;