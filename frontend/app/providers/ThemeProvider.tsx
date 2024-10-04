'use client';
import {
  createContext,
  useContext,
  useState,
} from 'react';

import { Dispatch, SetStateAction } from 'react';

const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({
  theme: 'light',
  setTheme: () => {},
});

import { ReactNode } from 'react';

interface ThemeProviderProps {
  theme: string;
  children: ReactNode;
}

export const ThemeProvider = ({ theme: initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
