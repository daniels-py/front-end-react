import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/Crud/MyComponent.jsx';
import Headerr from './Components/header/header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headerr />
      <MyComponent />
    </>
  )
}

export default App
