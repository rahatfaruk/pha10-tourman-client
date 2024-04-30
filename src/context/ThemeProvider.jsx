import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(null)

  // change theme onChange device theme 
  useEffect(() => {
    const mmIsDark = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = e => {
      if (e.matches) {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      }
    }

    // theme listener
    mmIsDark.addEventListener('change', handleThemeChange)

    // cleanup
    return () => mmIsDark.removeEventListener('change', handleThemeChange)
  }, [])

  // change theme onClick theme-toggler
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('tourman:theme', 'dark')
    } 
    else if (isDark === false) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('tourman:theme', 'light')
    }
  }, [isDark])

  // update them on page-load
  useEffect(() => {
    const lsTheme = localStorage.getItem('tourman:theme')
    const mmIsDark = window.matchMedia('(prefers-color-scheme: dark)')

    // localStorage
    if (lsTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } 
    // device-media
    else if(mmIsDark.matches) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  return (  
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;