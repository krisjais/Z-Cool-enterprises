'use client';

import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

export default function Card({ className, children, tiltMaxAngle = 10, enableGlare = true, ...props }) {
  const { setCursorHover } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let frameId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Standard container template
  const cardContent = (
    <div
      className={cn(
        "glass-card rounded-[24px] p-6 relative overflow-hidden transition-all duration-300",
        className
      )}
      onMouseEnter={() => setCursorHover(true)}
      onMouseLeave={() => setCursorHover(false)}
      {...props}
    >
      {children}
    </div>
  );

  // Return static layout during server rendering
  if (!mounted) {
    return <div className={cn("glass-card rounded-[24px] p-6 relative overflow-hidden", className)}>{children}</div>;
  }

  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngle}
      tiltMaxAngleY={tiltMaxAngle}
      perspective={1000}
      glareEnable={enableGlare}
      glareMaxOpacity={0.12}
      glareColor="#1E6FFF"
      glarePosition="all"
      glareBorderRadius="6px"
      scale={1.02}
      transitionSpeed={1500}
    >
      {cardContent}
    </Tilt>
  );
}
