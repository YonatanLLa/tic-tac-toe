import { useEffect, useState } from 'react'

const Themes = () => {


  const [theme, setTheme] = useState(() => {
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
      <div className='h-screen flex justify-center items-center dark:bg-neutral-900'>
       

        <button className=' bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-900 
            dark:hover:bg-slate-700 dark:text-white '
          onClick={handleChangeTheme}
        >
          mode dark
        </button>
      </div>
    </>
  )
}

export default Themes