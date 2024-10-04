'use client';
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import React from 'react';
import { useTheme } from "../providers/ThemeProvider";

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