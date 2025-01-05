import Loader from '@/Components/common/loader';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Loader />
    </div>
  );
};

export default LoadingPage;
