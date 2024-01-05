'use client';
import { useTheme } from '../../context/ThemeProvider'
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import React from 'react';
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();


  return (
    <React.Fragment>
    {theme === 'light'
    ? <MdOutlineLightMode onClick={()=> setTheme('dark')} className='cursor-pointer'/>
    : <MdDarkMode onClick={()=> setTheme('light')} className='cursor-pointer'/>
  }
    </React.Fragment>
  );
};

export default ThemeSwitch;