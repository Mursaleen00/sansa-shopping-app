import React from 'react';
import Image from 'next/image';
import Button from '../buttons/button';
import noproduct from '@/../public/image/no_product.svg';

const Noproductinbag = () => {
  return (
    <div className='flex flex-col justify-around items-center bg-gray  h-[400px] rounded-2xl m-9 '>
      <Image
        alt={''}
        src={noproduct}
        width={150}
        height={100}
      />
      <div className='flex flex-col items-center gap-y-3'>
        <h1 className='flex font-bold text-lg '>No product in Bag</h1>
        <p className=' text-xs'>Ordered product will appear here</p>
      </div>
      <div>
        <Button
          className='w-[250px] '
          text='Go to shopping'
        />
      </div>
    </div>
  );
};

export default Noproductinbag;
