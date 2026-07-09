import { useState, useEffect } from 'react';

export const useMouseMove = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalise values from -1 to 1 (useful for shaders)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x,
        y,
        clientX: e.clientX,
        clientY: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};
