// src\component\common\Loader.tsx
'use client';

// React Imports
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    // InfinitySpin
    <InfinitySpin
      width='200'
      color='#8AC732'
    />
  );
};

export default Loader;
