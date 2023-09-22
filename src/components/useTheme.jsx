import { useState, useEffect } from 'react'

const useTheme = () => {

    const [ theme, setTheme ] = useState(() => {
        /* This function assigns the value of 'theme' in the localstorage to the theme variable if 'theme' key exist, 
           if not it assigns 'light' to the theme variable.
           This makes the theme persistent even when refreshed.
        */
        let initialTheme = localStorage.getItem('theme')
        initialTheme = initialTheme ? initialTheme : 'light'
        return initialTheme
      })

      const toggleTheme = () => {
        /* This function sets the localstorage 'theme' to the opposite value of the current theme variable and updates the theme variable.  */
        setTheme((prevTheme) => {
          let newTheme = prevTheme === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newTheme)
          return newTheme
        })  
      }
      
      useEffect(() => {
        // This function applies dark or light mode to the document based on the theme value
        const reverseTheme = theme === 'light' ? 'dark' : 'light'
        const root = window.document.documentElement
        root.classList.remove(reverseTheme)
        root.classList.add(theme)
      }, [theme])
    

      
  return [ theme, toggleTheme ]
}

export default useTheme
