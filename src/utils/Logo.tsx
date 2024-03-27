import React from 'react'
import logoMoon from "../assets/YDRAY-STEF-BLANCO-SIN-ESLOGAN.png"
import logoSun from "../assets/YDRAY-STEF-PRINCIPAL-SIN-ESLOGAN.png"
interface Props {
    theme: "light" | "dark"; // Define el tipo de la prop `theme`
}
const Logo: React.FC<Props> = ({ theme }) => {
    return (
        <div>
            {
                theme === "light" ? <img src={logoSun} alt="logo" className='w-32 my-4' />
                    : <img src={logoMoon} alt="logo" className='w-32 my-4' />
            }
        </div>
    )
}

export default Logo