import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
