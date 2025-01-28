// src/Components/cards/add-to-card.tsx
'use client';

// Store Import
import { removeProduct } from '@/store/Slice/product-slice';
// Next Import
import Image from 'next/image';

// React Imports
import React, { FC, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

// Use interface Props
interface Props {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
  id: number;
  index: number;
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
}

const AddToCard: FC<Props> = ({
  thumbnail,
  index,
  price,
  description,
  title,
  id,
  quantities,
  setQuantities,
}) => {
  // State
  const [quantity, setQuantity] = useState(quantities[index] || 1);

  // dispatch
  const dispatch = useDispatch();
  //  remove
  const remove = () => {
    dispatch(removeProduct(id));
    setQuantities(prevQuantities => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities.splice(index, 1);
      return updatedQuantities;
    });
  };

  // handleChangeQuantity
  const handleChangeQuantity = (operator: 'add' | 'remove') => {
    if (operator === 'add') {
      setQuantity(quantity < 5 ? quantity + 1 : quantity);
      setQuantities(prevQuantities => {
        const updatedQuantities = [...prevQuantities];
        updatedQuantities[index] = quantity + 1;
        return updatedQuantities;
      });
    } else if (operator === 'remove') {
      if (quantity > 1) {
        setQuantity(quantity > 1 ? quantity - 1 : quantity);
        setQuantities(prevQuantities => {
          const updatedQuantities = [...prevQuantities];
          updatedQuantities[index] = quantity - 1;
          return updatedQuantities;
        });
      }
    }
  };

  // useEffect
  useEffect(() => setQuantity(quantities[index] || 1), [quantities]);

  return (
    <div className='flex sm:flex-row flex-col border items-center border-border mx-5 rounded-md px-4'>
      {/* image  */}
      <Image
        alt={''}
        src={thumbnail}
        width={180}
        height={180}
      />
      {/* detail */}
      <div className='py-6  flex flex-col gap-y-1 '>
        <h1 className='flex font-bold text-lg'>{title}</h1>
        <h2 className='flex font-medium text-lg '>{price} USD</h2>
        <p className='line-clamp-2'>{description}</p>
        <div className='flex items-center justify-between pt-1'>
          {/* quantity */}
          <div className='flex gap-x-2 items-center'>
            Qty:
            <button
              className='flex size-7 rounded-full items-center justify-center bg-[#E5E5E5]'
              onClick={() => handleChangeQuantity('remove')}
              disabled={quantity <= 1}
            >
              -
            </button>
            {quantity} / 5
            <button
              className='flex !size-7 rounded-full items-center justify-center bg-[#E5E5E5]'
              onClick={() => handleChangeQuantity('add')}
              disabled={quantity >= 5}
            >
              +
            </button>
          </div>
          {/* remove Small Screen  */}
          <div className='flex items-center md:hidden '>
            <FaTrash
              className='flex size-5 justify-end items-end  text-error cursor-pointer '
              onClick={remove}
            />
          </div>
        </div>
      </div>
      {/* remove medium Screen  */}
      <div className='md:flex items-end justify-end hidden md:mb-32'>
        <FaTrash
          className='flex size-5 justify-end items-end  text-error cursor-pointer '
          onClick={remove}
        />
      </div>
    </div>
  );
};

export default AddToCard;
