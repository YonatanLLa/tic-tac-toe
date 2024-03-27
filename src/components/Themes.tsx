import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

import { useEffect, useState } from 'react'
import Logo from "../utils/Logo";
// import NavBar from "./NavBar";

const Themes = () => {


  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark"
    }
    return "light"
  })
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }
  return (
    <>
      <div className='flex justify-center items-center'>
        <button
          className={`relative w-16 h-8 bg-neutral-800 rounded-full p-1 ${theme === "dark" ? "bg-blue-600" : "bg-yellow-400"}`}
          onClick={handleChangeTheme}
        >
          <span className={`block absolute top-0 left-0 w-8 h-8 bg-[#ff3399] rounded-full shadow-md transform transition-transform ${theme === "light" ? "translate-x-full" : ""}`} />
          <MdSunny className={`absolute left-2 top-2 text-yellow-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`} />
          <BsMoonStarsFill className={`absolute right-2 top-2 text-blue-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
        </button>
        <Logo theme={theme} />
      </div>
    </>
  )
}

export default Themes