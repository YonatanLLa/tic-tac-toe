import { Link, useLocation } from 'react-router-dom';

import Themes from './Themes'
import RedSocial from '../utils/RedSocial';
import LogoSun from '../utils/LogoSun';

const NavBar = () => {
  const location = useLocation()
  return (
    <div className='flex justify-center dark:bg-neutral-950  '>
      <div className='max-w-6xl w-full flex justify-between'>
        <div className=''>
          {/* <Logo theme={'light'}/> */}
          <LogoSun />
        </div>
        <div>
          <ul className='flex w-48 justify-between items-center h-full'>
            <Link to="/" className={location.pathname === "/" ? `transition-all duration-300 border-b-8 border-[#ff3399]  dark:text-white hover:text-[#ff3399] w-full h-full flex justify-center items-center` : " w-full h-full dark:text-white flex justify-center items-center"}>
              <li>Servicios</li>
            </Link>
            <Link to="/proyectos" className='transition-all duration-300 hover:border-b-8 dark:text-white hover:border-[#ff3399] w-full h-full flex justify-center items-center'>
              <li>Proyectos</li>
            </Link>
          </ul>
        </div>
        <div className='flex'>
          <div className='mr-2'>
            <RedSocial />
          </div>
          <Themes />
        </div>
      </div>
    </div>
  )
}

export default NavBar