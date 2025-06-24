import { useNavigate } from 'react-router-dom';

/* Estilo general de la pagina */

import '../pages/Home.css';

/* Mis componentes */

import Header from '../Components/Header/Header'
import Herobanner from '../Components/Herobanner/HeroBanner';
import Footer from '../Components/Footer/Footer';
import WhatsAppButton from '../Components/WhatsAppButton/WhatsAppButton';
import ProductoCatalogo from '../Components/ProductoCatalogo';
import Ubicacion from '../Components/Ubicacion/Ubicacion';


function Home() {
  const navigate = useNavigate();

  return (
    <div>

       <Header />
       <Herobanner />
      <WhatsAppButton />
      {/* Aquí muestras el catálogo */}
      <Ubicacion />
       <Footer />
    </div>
    
  )
}

export default Home