'use client';
import React from 'react';
import blackshirt from '@/../public/image/blackshirt.svg';
import Image from 'next/image';
import Input from '@/Components/Input';
import shirtTag from '@/../public/icons/shirt tag.svg';
import Button from './button';
import { ShoppingData } from '@/constant/shoppingData';

const Shoppingdbagcard = () => {
  return (
    <div className='grid lg:grid-cols-2  px-2 md:px-7 md:gap-x-5 py-6 gap-y-7'>
      <div className='grid grid-row bg-gray w-full h-fit rounded-2xl py-6 gap-y-5'>
        {/* White shirt */}
        <div className='flex sm:flex-row flex-col border justify-start items-center p-8  border-black mx-5 rounded-md sm:gap-x-9'>
          <Image
            alt={''}
            src={blackshirt}
          />
          <div>
            <h1 className='flex font-bold text-lg'>White shirt 9.50 USD</h1>
            <p className='text-lg'>Description</p>
            <div className='flex sm:flex-row flex-col  p-4 sm:gap-x-4 md:gap-x-6 items-center'>
              {/* SIZE */}
              <div className='flex gap-1 items-center'>
                size:
                <button className='flex border-2 size-5 w-12 bg-[#E5E5E5] items-center justify-center'>
                  L
                </button>
              </div>
              {/* Quantity */}
              <div className='flex gap-1 items-center'>
                Qty:
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
        <div className='flex sm:flex-row flex-col border justify-start items-center p-8  border-black mx-5 rounded-md sm:gap-x-9'>
          <Image
            alt={''}
            src={blackshirt}
          />
          <div>
            <h1 className='flex font-bold text-lg'>Black shirt 9.50 USD</h1>
            <p className='text-lg'>Description</p>
            <div className='flex sm:flex-row flex-col p-3 sm:gap-x-4 md:gap-x-6'>
              {/* SIZE */}
              <div className='flex gap-1'>
                size:
                <button className='flex border-2 size-5 w-12 bg-[#E5E5E5] items-center justify-center'>
                  L
                </button>
              </div>
              {/* Quantity */}
              <div className='flex gap-1 items-center'>
                Qty:
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
        {/* border */}
        <div className='flex border border-[#dddddc] items-center m-7'></div>
        {/* Inout */}
        <div className='flex items-center m-auto justify-around w-full '>
          <Input
            label=''
            placeholder='Enter promotion code to get discount'
            legend='code'
            type='number'
            icon={shirtTag.src}
          />
        </div>
      </div>
      <div className='grid  items-center gap-y-6 top-11'>
        {/* 2nd section  */}
        <div className='flex flex-col  py-[40px] gap-y-6 sm:h-full bg-gray rounded-2xl'>
          <h1 className='font-semibold text-lg px-9  '>Summary ( 2 items )</h1>

          <div className='flex justify-between px-9 '>
            <p className='text-[#44483D]'>Subtotal</p>
            <p className='font-bold text-sm'>16.25 USD</p>
          </div>
          <div className='flex justify-between  items-center px-9 '>
            <p className='text-[#44483D]'>Shipping</p>
            <p className='font-bold text-sm'>Free</p>
          </div>
          <div className=' flex border  border-[#dddddc] items-center mx-7'></div>
          {/* total price */}
          <div className='flex justify-between  px-6'>
            <p className='text-[#44483D]'>Total</p>
            <p className='font-bold'>16.25 USD</p>
          </div>
          {/* Button */}
          <div className='flex justify-around '>
            <Button
              className='sm:w-full w-40 sm:mx-20'
              text='continue'
            />
          </div>
        </div>
        {/* 3rd section */}
        <div className='flex flex-col grid-rows-1 bg-gray sm:h-full rounded-2xl justify-around items-center py-7 gap-y-7'>
          <div className='flex flex-col sm:flex-row md:px-7 sm:py-10 sm:gap-x-5 '>
            <p>Payment accepted :</p>
            <div className='flex flex-wrap gap-2 justify-around'>
              {ShoppingData.map((list, index) => (
                <Image
                  key={index}
                  src={list.icon || ''}
                  alt=''
                  width={35}
                  height={24}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col sm:flex-row md:px-7 pb-4 sm:gap-x-5'>
            <p>Customer services :</p>
            <p className='font-bold'> 24/7 +855 (240) 389 328</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppingdbagcard;
