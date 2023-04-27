
import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

import {ThemeProvider as ThemeProviderStyled} from 'styled-components';
import {darkTheme, lightTheme} from './themes.js';

const themes = {
  lightTheme,
  darkTheme,
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    console.log(theme.colors.background);
  }, [theme])

  function toggleTheme() {
    let newTheme;
    if (theme.title === 'light') {
      newTheme = darkTheme;
    } else {
      newTheme = lightTheme;
    }

    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={theme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

