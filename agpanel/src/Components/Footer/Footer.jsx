import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Para Empresas</h4>
          <ul>
            <li>Empleador</li>
            <li>Plan de Salud</li>
            <li>Individual</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Socios</h4>
          <ul>
            <li>Swing Tech</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 TuEmpresa. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Términos y Condiciones</a>
          <a href="#">Privacidad</a>
          <a href="#">Seguridad</a>
          <a href="#">Declaración de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
