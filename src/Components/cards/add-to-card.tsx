'use client';
import { removeProduct } from '@/store/Slice/product-slice';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

interface Props {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  id: number;
}

const AddToCard: FC<Props> = ({ thumbnail, price, description, title, id }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className='flex sm:flex-row flex-col border items-center border-border mx-5 rounded-md px-4'>
      <Image
        alt={''}
        src={thumbnail}
        width={180}
        height={180}
        className='border-2 bg-blue-  '
      />

      <div className='py-6 pr-6 flex flex-col gap-y-1 '>
        <h1 className='flex font-bold text-lg'>{title}</h1>
        <h2 className='flex font-medium text-lg '>{price} USD</h2>
        <p className='line-clamp-2'>{description}</p>
        <div className='flex gap-x-2 items-center'>
          Qty:
          <button
            className='flex size-7 rounded-full items-center justify-center bg-[#E5E5E5]'
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
      </div>
      <div className='flex items-end justify-end mb-32 '>
        <FaTrash
          className='flex size-5 top text-red-700'
          onClick={remove}
        />
      </div>
    </div>
  );
};

export default AddToCard;
