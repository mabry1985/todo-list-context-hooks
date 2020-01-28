import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme, isLightTheme } = this.context;
    const text = !isLightTheme ? "Light Theme" : "Night Theme"; 
    return (
      <div>
       <button onClick={toggleTheme}>{text}</button> 
      </div>
    )
  }
}

export default ThemeToggle
