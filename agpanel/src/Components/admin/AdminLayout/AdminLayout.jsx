import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import './AdminLayout.css';

export const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <div className="admin-layout__main">
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        <main className="admin-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
};
