import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../state/ThemeContext';

export default function Header() {
  const { setThemeMode, themeMode, mode } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (themeMode === 'lightTheme') {
      setThemeMode('darkTheme');
    } else setThemeMode('lightTheme');
  };

  return (
    <div>
      <div>
        <Link to="/">Go Home </Link>
        <input type="checkbox" onChange={toggleTheme} />
      </div>
    </div>
  );
}
