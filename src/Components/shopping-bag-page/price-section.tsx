import { ShoppingData } from '@/constant/shoppingData';
import Image from 'next/image';
import React from 'react';
import Button from '../buttons/button';

interface PriceSectionProps {
  price: number;
  totalItems?: number;
  setStep: () => void;
}

const PriceSection = ({ price, setStep, totalItems }: PriceSectionProps) => {
  return (
    <div>
      <div className='grid items-center gap-y-6 top-11 w-full'>
        {/* 2nd section  */}
        <div className='flex flex-col  py-[40px] gap-y-6 sm:h-full bg-gray rounded-2xl w-full'>
          <h1 className='text-lg px-9  '>
            Summary ( {totalItems} item
            {totalItems && totalItems > 1 ? 's' : ''} )
          </h1>

          <div className='flex justify-between px-9 '>
            <p className='text-[#44483D]'>Subtotal</p>
            <p className='font-bold text-sm'>{price} USD</p>
          </div>
          <div className='flex justify-between  items-center px-9 '>
            <p className='text-[#44483D]'>Shipping</p>
            <p className='font-bold text-sm'>Free</p>
          </div>
          <div className=' flex border  border-[#dddddc] items-center mx-7'></div>
          {/* total price */}
          <div className='flex justify-between  px-6'>
            <p className='text-[#44483D]'>Total</p>
            <p className='font-bold'>{price} USD</p>
          </div>
          {/* Button */}
          <div className='flex justify-around '>
            <Button
              className='sm:w-full w-40 sm:mx-20'
              text='Pay Now'
              onClick={setStep}
              // onSubmit={}
            />
          </div>
        </div>
        {/* 3rd section */}
        <div className='flex flex-col grid-rows-1 bg-gray sm:h-full rounded-2xl justify-around items-center py-7 gap-y-7'>
          <div className='flex flex-col sm:flex-row md:px-7 sm:py-10 sm:gap-x-5 '>
            <p>Payment accepted:</p>
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
            <p>Customer services:</p>
            <p className='font-bold'> 24/7 +855 (240) 389 328</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
