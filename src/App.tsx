import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';


function App() {
  // const location = useLocation()
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Servicios />} />
        <Route path='/Proyectos' element={<Proyectos />} />
      </Routes>
    </div>
  )
}

export default App
