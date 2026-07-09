'use client';

import React from 'react';
import { Environment as DreiEnvironment } from '@react-three/drei';

export default function Environment() {
  return (
    <DreiEnvironment
      preset="city" // options: 'city', 'studio', 'night', 'warehouse'
      background={false} // don't render the environment on canvas background
    />
  );
}
