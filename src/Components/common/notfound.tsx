import React from 'react';
import search from '@/../public/image/Search.svg';
import Image from 'next/image';

const Notfound = () => {
  return (
    <div className='flex-col block align-center pt-3'>
      <div className='flex text-center justify-around'>
        <Image
          alt={''}
          src={search}
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-lg '>Product not found</h1>
        <p>Product your looking for might not have in our site</p>
      </div>
    </div>
  );
};

export default Notfound;
