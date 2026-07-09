'use client';

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'text', 'drag'

  return (
    <ThemeContext.Provider value={{ cursorHover, setCursorHover, cursorType, setCursorType }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
