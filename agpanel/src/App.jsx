import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import NotFound from './pages/NotFound'; // Agrega esta línea
import { Dashboard } from './pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> {/* Cambia aquí */}
    </Routes>
  )
}

export default App
