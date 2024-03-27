import { Link } from 'react-router-dom'

import Themes from './Themes'
import RedSocial from '../utils/RedSocial';
import Logo from '../utils/Logo';

const NavBar = () => {
  return (
    <div className='flex justify-center dark:bg-neutral-950 '>
      <div className='max-w-6xl w-full flex justify-between'>

        <div className=''>
          {/* <Logo theme={'light'}/> */}
          
        </div>
        <ul className='flex justify-between items-center'>
          <li className=' dark:text-fuchsia-50 font-sans'>
            <Link to="/">servicios</Link>
          </li>
          <li className='dark:text-fuchsia-50'>
            <Link to="/proyectos">proyectos</Link>
          </li>
        </ul>
        <div className='flex'>
          <div className='mr-2'>
            <RedSocial/>
          </div>
          <Themes />
        </div>
      </div>
    </div>
  )
}

export default NavBar