'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Image from 'next/image';
import { GoHeart } from 'react-icons/go';
import { IoMdHeart } from 'react-icons/io';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discount?: number;
  className?: string;
  link?: string;
}

const ProductCard = ({
  title,
  description,
  thumbnail,
  price,
  discount,
  className,
  link,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number,
  ) => {
    const discount = discountPercentage;
    const discountAmount = (price * discount) / 100;
    return Math.round(price - discountAmount);
  };

  return (
    <div
      className={`relative border border-border rounded-lg ${className} p-6 w-full bg-white`}
    >
      <div className='flex justify-between items-center gap-x-6'>
        {discount && (
          <p className='bg-primary py-2.5 px-4 rounded-full text-white'>
            {Math.round(discount)}% Off
          </p>
        )}

        <div className='bg-white rounded-full !z-30'>
          {isLiked ? (
            <IoMdHeart
              size={24}
              className='absolute text-error top-4 right-4 cursor-pointer z-40'
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <GoHeart
              className='absolute top-4 right-4 cursor-pointer z-40'
              size={24}
              onClick={() => setIsLiked(!isLiked)}
            />
          )}
        </div>
      </div>
      <Link
        href={link || ''}
        className='bg-white'
      >
        <Image
          src={thumbnail || ''}
          alt='t-shirt'
          width={800}
          height={800}
          className='z-10 py-4 !mix-blend-multiply bg-white'
        />
      </Link>
      <h1
        className='text-secondary-700 text-2xl line-clamp-2 pb-1'
        title={title}
      >
        {title}
      </h1>

      <p
        className='text-secondary-500 line-clamp-2'
        title={description}
      >
        {description}
      </p>
      <div className='flex justify-between items-center gap-x-6 pt-2'>
        <p className='text-secondary-700 text-lg font-medium'>
          {discount
            ? calculateDiscountedPrice(price, discount)
            : Math.round(price)}{' '}
          USD{' '}
          {discount && calculateDiscountedPrice(price, discount) && (
            <s className='text-secondary-300  text-base font-normal'>
              {Math.round(price)} USD
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
