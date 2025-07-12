import { FaBars } from 'react-icons/fa';
import { UserMenu } from '../UserMenu/UserMenu';
import './Header.css';

export const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const currentUser = {
    name: 'María González',
    email: 'maria.gonzalez@empresa.com',
    role: 'Administrador',
    avatar: undefined,
  };

  return (
    <header className="header">
      <div className="header__left">
        <button
          onClick={onToggleSidebar}
          className="header__menu-button"
        >
          <FaBars />
        </button>

        <div className="header__title">
          <h1>Panel de Administración</h1>
        </div>
      </div>

      <div className="header__right">
        <div className="header__welcome">
          <span>Bienvenido de vuelta,</span>
          <span className="header__username">{currentUser.name}</span>
        </div>

        <UserMenu user={currentUser} />
      </div>
    </header>
  );
};
