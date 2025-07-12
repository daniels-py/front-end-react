import { useState, useRef, useEffect } from 'react';
import { FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import './UserMenu.css';

export const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="user-menu__trigger"
      >
        <div className="user-menu__avatar">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="user-menu__avatar-image" />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </div>
        <div className="user-menu__info">
          <p className="user-menu__name">{user.name}</p>
          <p className="user-menu__role">{user.role}</p>
        </div>
        <FaChevronDown />
      </button>

      {isOpen && (
        <div className="user-menu__dropdown">
          <div className="user-menu__header">
            <div className="user-menu__header-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="user-menu__header-avatar-image" />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="user-menu__header-info">
              <p className="user-menu__header-name">{user.name}</p>
              <p className="user-menu__header-email">{user.email}</p>
              <p className="user-menu__header-role">{user.role}</p>
            </div>
          </div>

          <div className="user-menu__actions">
            <button className="user-menu__action">
              <FaUser />
              <span>Mi Perfil</span>
            </button>
            <button className="user-menu__action">
              <FaSignOutAlt />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
