// src/app/loading.tsx

// Components Import
import Loader from '@/Components/common/loader';

// React Import
import React from 'react';

const LoadingPage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      {/* Loader */}
      <Loader />
    </div>
  );
};

export default LoadingPage;
