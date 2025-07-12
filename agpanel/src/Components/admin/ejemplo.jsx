import { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaBox,
  FaShoppingCart,
  FaChartBar,
  FaFileAlt,
  FaCog
} from 'react-icons/fa';
import './Sidebar.css';

export const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: FaHome },
    { id: 'users', name: 'Usuarios', icon: FaUser, badge: 12 },
    { id: 'products', name: 'Productos', icon: FaBox },
    { id: 'orders', name: 'Pedidos', icon: FaShoppingCart, badge: 5 },
    { id: 'analytics', name: 'Analíticas', icon: FaChartBar },
    { id: 'reports', name: 'Reportes', icon: FaFileAlt },
    { id: 'settings', name: 'Configuración', icon: FaCog },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <div className="sidebar__logo-icon">
              <span>A</span>
            </div>
            <span className="sidebar__logo-text">AdminPanel</span>
          </div>
        </div>

        <nav className="sidebar__nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`sidebar__nav-item ${isActive ? 'sidebar__nav-item--active' : ''}`}
              >
                <div className="sidebar__nav-content">
                  <Icon />
                  <span className="sidebar__nav-text">{item.name}</span>
                </div>

                {item.badge && (
                  <span className={`sidebar__badge ${isActive ? 'sidebar__badge--active' : ''}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__version">
            <p>Versión 2.1.0</p>
            <p>© 2024 AdminPanel</p>
          </div>
        </div>
      </aside>
    </>
  );
};
