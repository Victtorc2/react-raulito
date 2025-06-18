import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ 
        flex: 1, 
        marginLeft: '250px', 
        padding: '20px',
        overflowY: 'auto'
      }}>
        <Outlet /> {/* Esto es CRUCIAL */}
      </div>
    </div>
  );
}