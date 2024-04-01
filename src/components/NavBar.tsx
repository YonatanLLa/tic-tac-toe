import { Link, useLocation } from 'react-router-dom';

import Themes from './Themes'
import RedSocial from '../utils/RedSocial';
import LogoSun from '../utils/LogoSun';

const NavBar = () => {
  const location = useLocation()
  return (
    <div className='flex justify-center dark:bg-neutral-950  '>
      <div className='max-w-6xl w-full flex justify-between m-2'>
        <div className=''>
          {/* <Logo theme={'light'}/> */}
          <LogoSun />
        </div>
        <div>
          <ul className='flex w-64 justify-between items-center h-full'>
            <Link to="/" className={location.pathname === "/" ? `transition-all hover:text-[#ff3399]  duration-100 border-b-4 border-[#ff3399]  dark:text-[#ff3399]  w-full h-full flex justify-center items-center` : " w-full h-full transition-all  duration-100 dark:hover:text-[#ff2190] dark:text-white flex justify-center items-center"}>
              <li className=' text-body-bold'>Servicios</li>
            </Link>
            <Link to="/proyectos" className={location.pathname === "/proyectos" ? `transition-all duration-100 border-b-4 border-[#ff3399] dark:text-[#ff3399] hover:text-[#ff3399] w-full h-full flex justify-center items-center` : " w-full h-full dark:text-white flex justify-center items-center"}>
              <li className=' text-body-bold'>Proyectos</li>
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