// src/Components/buttons/back-button.tsx
'use client';

// React & next Imports
import { useRouter } from 'next/navigation';
import React from 'react';

//  React Icon Import
import { IoArrowBack } from 'react-icons/io5';

const BackButton = () => {
  const router = useRouter();

  return (
    // Button
    <button
      onClick={() => router.back()}
      className='flex gap-x-1 text-secondary-700 cursor-pointer items-center w-fit'
    >
      <IoArrowBack size={20} />
      <p className='text-lg font-medium'>Back</p>
    </button>
  );
};

export default BackButton;
