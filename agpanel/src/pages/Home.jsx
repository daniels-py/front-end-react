import { useNavigate } from 'react-router-dom';

/* Estilo general de la pagina */

import '../pages/Home.css';

/* Mis componentes */

import Header from '../Components/header/Header'
import Herobanner from '../Components/Herobanner/HeroBanner';

function Home() {
  const navigate = useNavigate();

  return (
    <div>

       <Header />
        <Herobanner />

      <h5 className='titulo1'>hola mundo este es mi home</h5>
      <button onClick={() => navigate('/login')}>Ir a Login</button>
    </div>
  )
}

export default Home