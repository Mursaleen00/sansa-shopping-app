// src/Components/common/not-found,tsx

// React Import
import React from 'react';

// Next Import
import Image from 'next/image';

// Image Import
import search from '@/../public/image/Search.svg';

const PageNotfound = () => {
  return (
    <div className='flex-col block align-center pt-3'>
      {/* <image  */}
      <div className='flex text-center justify-around'>
        <Image
          alt={''}
          src={search}
          width={100}
          height={100}
        />
      </div>
      {/* Text  */}
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-lg '>Product not found</h1>
        <p>Product your looking for might not have in our site</p>
      </div>
    </div>
  );
};

export default PageNotfound;
