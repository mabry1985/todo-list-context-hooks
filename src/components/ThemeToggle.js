import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  const text = !isLightTheme ? "Light Theme" : "Night Theme"; 

  return <button onClick={toggleTheme}>{text}</button>;
}


export default ThemeToggle
