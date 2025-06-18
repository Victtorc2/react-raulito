import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Inicio from './components/inicio/Inicio';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Ruta principal protegida */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN', 'EMPLEADO']} />}>
            <Route element={<MainLayout />}>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/inventario" element={<div>Inventario</div>} />
              <Route path="/ventas" element={<div>Ventas</div>} />
            </Route>
          </Route>

          {/* Rutas de admin */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route element={<MainLayout />}>
              <Route path="/admin/productos" element={<div>Productos</div>} />
              <Route path="/admin/usuarios" element={<div>Usuarios</div>} />
              <Route path="/admin/auditoria" element={<div>Auditoría</div>} />
              <Route path="/admin/reportes" element={<div>Reportes</div>} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;