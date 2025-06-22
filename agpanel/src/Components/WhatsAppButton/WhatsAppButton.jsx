import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


const WhatsAppButton = () => {
  const phoneNumber = '573001234567'; // Reemplaza con tu número

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#fff" />
    </a>
  );
};

export default WhatsAppButton;

