import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h5 className='titulo1'>hola mundo este es mi login</h5>
      <button onClick={() => navigate('/panel')}>Ir al Panel</button>
    </div>
  );
}

export default Login;