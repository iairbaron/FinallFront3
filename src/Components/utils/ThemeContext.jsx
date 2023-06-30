import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {

 const themes = {
    light: {
      font: "white",
      background: "black",
    },
    dark: {
      font: "black",
      background: "white",
    },
  };

 const [theme, setTheme] = useState(themes.dark)

    const changeTheme = () => {
       {theme.font === themes.dark.font ? setTheme(themes.light) :setTheme(themes.dark)}
      }

const value={
    themes,
    theme,
    changeTheme
}

  return (
    <ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider