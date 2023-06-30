import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

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

const initialState = {
  theme: themes.dark,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      };
    default:
      throw new Error();
  }
};

const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const changeTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value = {
    themes,
    theme: state.theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider