import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import NotFound from './pages/NotFound'; // Agrega esta línea

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="*" element={<NotFound />} /> {/* Cambia aquí */}
    </Routes>
  )
}

export default App
