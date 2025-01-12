import search from '@/../public/image/Search.svg';
import React from 'react';
import Image from 'next/image';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Button from '../buttons/button';
const images = ['image 111', 'image 22', 'image 24', 'image 25'];

const Productdetials = () => {
  return (
    <div className='grid  sm:grid-cols-2 md:grid-cols-5  p-3  px-6 md:px-12 xl:px-24'>
      <div className=' flex flex-col gap-y-9 bg-gray border-2 col-span-3 justify-center items-center rounded-lg m-7'>
        <div>
          <Image
            alt={''}
            src={search}
            width={200}
            height={200}
            className='mt-9'
          />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 py-5 gap-4 '>
          {images.map((item, index) => (
            <div
              className='grid  border-2 h-[80px] border-[#E1E4D5] rounded-lg justify-center items-center'
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* 2nd section  */}
      <div className='flex flex-col gap-y-6 justify-center col-span-2'>
        <h1 className='flex font-bold text-2xl'>
          Shirt mockup concept with
          <br /> plain clothing
        </h1>
        <p className='flex text-sm'>
          This shirt is made in Thailand in a company called ANM
        </p>
        <div className='flex items-center gap-x-1'>
          <Rating
            style={{ maxWidth: 80 }}
            value={5}
            items={5}
            readOnly
          />
          <p className='text-sm text-black '>({5} stars) | 620 reviews</p>
        </div>
        <div className='text-2xl font-bold p-y-9'>9.10 USD</div>
        <div className='flex gap-2 items-center'>
          Quantity :
          <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
            -
          </button>
          1
          <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
            +
          </button>
        </div>
        {/* button */}
        <div className='sm:flex gap-x-5 gap-y-5 p-y-9'>
          <Button
            className='m-4 w-[250px] '
            text='Add to card'
          />
          <Button
            className='m-4'
            text='Add to favorite'
            isOutline
          />
        </div>
      </div>
    </div>
  );
};

export default Productdetials;
