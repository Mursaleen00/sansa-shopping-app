'use client';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Image from 'next/image';
import { GoHeart } from 'react-icons/go';
import { IoMdHeart } from 'react-icons/io';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  discount?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  price,
  discount,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const discounted = Number(price) - Number(discount);

  return (
    <div className='relative border border-border rounded-lg p-6 w-full min-w-[300px] bg-white'>
      <div className='flex justify-between items-center gap-x-6'>
        {discount && (
          <p className='bg-primary py-2.5 px-4 rounded-full text-white'>
            {discount}% Off
          </p>
        )}

        <div>
          {isLiked ? (
            <IoMdHeart
              size={24}
              className='absolute text-error top-4 right-4 cursor-pointer z-20'
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <GoHeart
              className='absolute top-4 right-4 cursor-pointer z-20'
              size={24}
              onClick={() => setIsLiked(!isLiked)}
            />
          )}
        </div>
      </div>

      <Image
        src={image}
        alt='t-shirt'
        width={800}
        height={800}
        className='z-10'
      />
      <h1 className='text-secondary-700 text-3xl line-clamp-1'>{title}</h1>
      <p className='text-secondary-500 line-clamp-3'>{description}</p>
      <div className='flex justify-between items-center gap-x-6'>
        <p className='text-secondary-700 text-lg font-medium'>
          {discounted ? discounted : price} USD{' '}
          {!Number.isNaN(discounted) && (
            <s className='text-secondary-300  text-base font-normal'>
              {price} USD
            </s>
          )}
        </p>
        <button className='bg-primary size-8 rounded-full flex justify-center items-center'>
          <FiPlus
            size={19}
            className='text-white'
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
