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