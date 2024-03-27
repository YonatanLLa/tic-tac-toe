import Themes from './Themes'
import logo from "../assets/YDRAY-STEF-BLANCO.png";

const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='dark:bg-black'>
        <img src={logo} alt="logo" className='w-32' />
      </div>
      <ul>
        <li className=' dark:text-red-500'>
          servicios
        </li>
        <li>
          proyectos
        </li>
      </ul>
      <div>
        <Themes />
      </div>
    </div>
  )
}

export default NavBar