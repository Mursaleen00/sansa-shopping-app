'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';

interface Props {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const AddToCard: FC<Props> = ({ thumbnail, price, description, title }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex sm:flex-row flex-col border justify-start items-center border-border mx-5 rounded-md'>
      <Image
        alt={''}
        src={thumbnail}
        width={180}
        height={180}
      />
      <div className='py-6 pr-6 flex flex-col gap-y-1'>
        <h1 className='flex font-bold text-lg'>{title}</h1>
        <h2 className='flex font-medium text-lg '>{price} USD</h2>
        <p className='line-clamp-2'>Description {description}</p>

        <div className='flex gap-x-2 items-center'>
          Qty:{' '}
          <button
            className='flex !size-7 rounded-full items-center justify-center bg-[#E5E5E5]'
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          >
            -
          </button>
          {quantity} / 5
          <button
            className='flex !size-7 rounded-full items-center justify-center bg-[#E5E5E5]'
            onClick={() => setQuantity(quantity < 5 ? quantity + 1 : quantity)}
          >
            +
          </button>
        </div>
        {/* <div className='grid sm:grid-cols-2 p-4 sm:gap-x-4 md:gap-x-6 items-center gap-y-3'> */}
        {/* SIZE */}
        {/* <div className='flex gap-1 items-center'>
                  size:
                  <button className='flex size-5 w-12 bg-[#E5E5E5] items-center justify-center'></button>
                </div> */}
        {/* Quantity */}
        {/* <div className='flex gap-1 items-center'>
                  Qty:
                  {quantity !== 1 && (
                    <button
                      className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'
                      onClick={() =>
                        setQuantity(quantity >= 0 ? quantity : quantity - 1)
                      }
                    >
                      -
                    </button>
                  )}
                  {quantity !== 1 && (
                    <button
                      className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'
                      onClick={() =>
                        setQuantity(quantity >= 0 ? quantity : quantity + 1)
                      }
                    >
                      +
                    </button>
                  )}
                </div> */}

        {/* </div> */}
      </div>
      {/* <div className='grid text-[#BA1A1A]'>remove</div> */}
    </div>
  );
};

export default AddToCard;
