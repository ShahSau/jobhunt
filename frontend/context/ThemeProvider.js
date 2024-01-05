'use client';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({theme:initialTheme, children}) => {
  const [theme, setTheme] = useState(initialTheme);

  console.log('ThemeProvider (on server & client)');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
