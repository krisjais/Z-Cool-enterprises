'use client';

import React, { createContext, useContext, useState } from 'react';

const defaultContext = {
  cursorHover: false,
  setCursorHover: () => {},
  cursorType: 'default',
  setCursorType: () => {},
};

const ThemeContext = createContext(defaultContext);

export const ThemeProvider = ({ children }) => {
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  return (
    <ThemeContext.Provider value={{ cursorHover, setCursorHover, cursorType, setCursorType }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext) || defaultContext;
export default ThemeContext;
