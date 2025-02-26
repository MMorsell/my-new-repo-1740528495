import React, { createContext, useContext, useState } from 'react';

const colors = {
  primary: '#6B4DE6',
  secondary: '#47E5BC',
  background: '#FAFAFA',
  text: '#2D3436',
  cardShadow: 'rgba(0,0,0,0.08)',
};

const ThemeContext = createContext({
  colors,
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ colors, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);