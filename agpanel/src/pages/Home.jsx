import { useNavigate } from 'react-router-dom';

/* Estilo general de la pagina */

import '../pages/Home.css';

/* Mis componentes */

import Header from '../Components/Header/Header'
import Herobanner from '../Components/Herobanner/HeroBanner';
import Footer from '../Components/Footer/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <div>

       <Header />
       <Herobanner />
       <Footer />

      <h5 className='titulo1'>hola mundo este es mi home</h5>
      <button onClick={() => navigate('/login')}>Ir a Login</button>
    </div>
    
  )
}

export default Home