// src/components/inicio/Inicio.jsx
import React, { useEffect } from 'react';
import { Tab, Tabs, Card, CardContent, CardHeader, Button } from '@mui/material';
import { ShoppingCartCheckout, WarningAmber, BarChart } from '@mui/icons-material';

const Inicio = () => {
  useEffect(() => {
    console.log('Componente Inicio cargado'); // Verifica si el componente está siendo cargado
  }, []);

  return (
    <div className="inicio-container">
      <h1 className="titulo">Panel de Control</h1>

      <Tabs>
        <Tab label="🛒 Ventas recientes">
          <div>Contenido de Ventas Recientes</div>
        </Tab>
        <Tab label="⚠️ Alertas">
          <div>Contenido de Alertas</div>
        </Tab>
        <Tab label="📊 Estadísticas">
          <div>Contenido de Estadísticas</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Inicio;
