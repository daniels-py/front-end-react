import "./Ubicacion.css";
import { MapPin, Clock, Phone } from 'lucide-react';


const Ubicacion = () => {
  return (
    <section className="ubicacion-section">
      <div className="ubicacion-container">
        <div className="ubicacion-header">
          <h2>Visítanos en Nuestra Ubicación</h2>
          <p>
            Ven a conocer nuestros productos en persona y recibe asesoría personalizada
          </p>
        </div>

        <div className="ubicacion-grid">
          {/* Información de contacto */}
          <div className="ubicacion-info">
            <div className="info-item">
              <div className="icon purple"><MapPin /></div>
              <div>
                <h3>Dirección</h3>
                <p>
                  Cra. 12 #17-70, Funza, Cundinamarca
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon pink"><Clock /></div>
              <div>
                <h3>Horarios</h3>
                <p> 
                  Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                  Sábados y Domingos: 9:00 AM - 6:00 PM<br />
            
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon rose"><Phone /></div>
              <div>
                <h3>Contacto</h3>
                <p>
                  +57 3000000<br />
                  ventas@beautylux.com
                </p>
              </div>
            </div>
          </div>

          {/* Mapa embebido */}
          <div className="ubicacion-mapa">
            <div className="mapa-iframe-container">
              <iframe
                title="Ubicación A&G"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14169.981447669246!2d-74.20494836956863!3d4.714937812053985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f83004d724327%3A0x5ed8172f845262bd!2sCasa%20de%20belleza%20A%26G!5e0!3m2!1ses!2sco!4v1746636195868!5m2!1ses!2sco"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;