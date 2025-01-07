'use client';
import React from 'react';
import blackshirt from '@/../public/image/blackshirt.svg';
import Image from 'next/image';
import Input from '@/Components/Input';
import shirtTag from '@/../public/icons/shirt tag.svg';
// import Button from './button';
const Shoppingdbagcard = () => {
  return (
    <div className='grid md:grid-cols-2 '>
      <div className='grid grid-row bg-gray w-full m-10 h-auto rounded-2xl'>
        {/* White shirt */}
        <div className='flex md:flex-row flex-col border justify-start items-center p-11 gap-x-11 border-black m-7 rounded-md'>
          <Image
            alt={''}
            src={blackshirt}
          />
          <div>
            <h1 className='flex font-bold text-lg'>White shirt 9.50 USD</h1>
            <p className='text-lg'>Description</p>
            <div className='grid sm:grid-cols-2 p-4'>
              {/* SIZE */}
              <div className='flex gap-2'>
                size
                <button className='flex border-2 size-5 w-12 bg-[#E5E5E5] items-center justify-center'>
                  L
                </button>
              </div>
              {/* Quantity */}
              <div className='flex gap-1 items-center'>
                Qty :
                <button className='flex border-2 size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                  -
                </button>
                1
                <button className='flex border-2 size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                  +
                </button>
              </div>
              {/* colour */}
              <div></div>
            </div>
          </div>
        </div>
        {/* blackshirt */}
        <div className='flex md:flex-row flex-col border justify-start items-center p-11 gap-x-11 border-black m-7 rounded-md'>
          <Image
            alt={''}
            src={blackshirt}
          />
          <div>
            <h1 className='flex font-bold text-lg'>White shirt 9.50 USD</h1>
            <p className='text-lg'>Description</p>
            <div className='grid sm:grid-cols-2 p-4'>
              {/* SIZE */}
              <div className='flex gap-2'>
                size
                <button className='flex border-2 size-5 w-12 bg-[#E5E5E5] items-center justify-center'>
                  L
                </button>
              </div>
              {/* Quantity */}
              <div className='flex gap-1 items-center'>
                Qty :
                <button className='flex border-2 size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                  -
                </button>
                1
                <button className='flex border-2 size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                  +
                </button>
              </div>
              {/* colour */}
              <div></div>
            </div>
          </div>
        </div>

        <div className=' flex border  border-[#dddddc] items-center m-7'></div>
        <div className='flex justify-between items-center '>
          <Input
            label=''
            placeholder='Enter promotion code to get discount'
            legend='code'
            type='number'
            icon={shirtTag.src}
          />
        </div>
      </div>
      {/* 2nd section  */}

      {/* <div className='flex '>
        <div className='flex flex-col items-center justify-center m-auto'>
          <h1 className='flex font-semibold text-gl text '>Summary ( 2 items )</h1>
          <div>
            <div className='grid grid-cols-2 justify-between items-center'>
              <p>Subtotal</p>
              <p className='font-bold text-sm'>16.25 USD</p>
              <p className=''>Shipping</p>
              <p className='font-bold text-sm'>Free</p>
            </div>
            <div className=' flex border border-[#dddddc] w-full justify-around items-center m-auto'></div> */}
      {/* total price */}
      {/* <div className='flex justify-between'>
              <p>Total</p>
              <p className='font-bold'>16.25 USD</p>
            </div> */}
      {/* Button */}
      {/* <Button
            className='m-4 w-[300px] '
            text='continue'
          /> */}

      {/* </div>
        </div> */}
      {/* 3rd section */}
      {/* <div></div> */}
      {/* </div> */}
    </div>
  );
};

export default Shoppingdbagcard;
