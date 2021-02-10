import React, { createContext, useState } from 'react';
import styles from './theme';
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('lightTheme');

  const mode = styles[themeMode];
  const value = { setThemeMode, themeMode };

  return (
    <ThemeContext.Provider style={mode} value={value}>
      <div style={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
