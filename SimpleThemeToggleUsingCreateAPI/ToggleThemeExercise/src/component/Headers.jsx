import React from 'react';
 import Footer from './Footer';
import { ThemeContext } from '../store/ThemeContextProvider';
import { useContext } from 'react'; 
import Button from './Button';

export default function Header() {
  const themeCtxx = useContext(ThemeContext);
 
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={themeCtxx.toggleTheme}>Toggle Theme</button>
      <Footer/>
    </header>
  );
}