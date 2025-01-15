// 'use client';
import blackshirt from '@/../public/image/blackshirt.svg';
import Image from 'next/image';
import Input from '../common/Input';
import PriceSection from './price-section';

const Shoppingdbagcard = () => {
  return (
    <div className='grid lg:grid-cols-2  px-2 md:px-7 md:gap-x-5 py-6 gap-y-7 '>
      <div className='grid grid-row bg-gray w-full  h-fit rounded-2xl py-6 gap-y-5'>
        {/* White shirt */}
        <div className='flex sm:flex-row flex-col border justify-start items-center p-8  border-black mx-5 rounded-md sm:gap-x-9'>
          <Image
            alt={''}
            src={blackshirt}
          />
          <div>
            <h1 className='flex font-bold text-lg'>White shirt 9.50 USD</h1>
            <p className='text-lg'>Description</p>
            <div className='flex sm:flex-row flex-col lg:flex-col xl:flex-row p-4 sm:gap-x-4 md:gap-x-6 items-center gap-y-3'>
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
            <div className='flex sm:flex-row flex-col lg:flex-col xl:flex-row p-3 sm:gap-x-4 md:gap-x-6'>
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
            </div>
          </div>
        </div>
        {/* border */}
        <div className='flex border border-[#dddddc] items-center mx-7'></div>
        {/* Input */}
        <div className='grid items-center justify-around w-full '>
          <Input
            label='Code'
            placeholder='Enter promotion code to get discount'
            type='number'
            className='w-full'
          />
        </div>
      </div>
      {/* Second section  */}
      <PriceSection />
    </div>
  );
};

export default Shoppingdbagcard;
