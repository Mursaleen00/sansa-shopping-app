'use client';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../buttons/button';
import Input from '../inputs/input';

interface CardItem {
  name: string;
  price: number;
  quantity?: number;
  image: string;
}

interface Props {
  data: CardItem[];
  totalPrice: number;
  setPrice: (price: number) => void;
  price: number;
}

const ShoppingBagCard = ({ data, price, totalPrice, setPrice }: Props) => {
  const [code, setCode] = useState<number>(0);

  const handleApplyCode = () => {
    if (code === 12345) setPrice(price - 10);
    else setPrice(totalPrice);
  };

  return (
    <div className='md:gap-x-5 gap-y-7 '>
      <div className='grid grid-row bg-gray w-full  h-fit rounded-2xl py-6 gap-y-5'>
        {/* White shirt */}
        {data.map((item, i) => (
          <div
            key={i}
            className='flex sm:flex-row flex-col border justify-start items-center p-8  border-border mx-5 rounded-md sm:gap-x-9'
          >
            <Image
              alt={''}
              src={item.image}
            />
            <div>
              <h1 className='flex font-bold text-lg'>
                {item.name} {item.price} USD
              </h1>
              <p className='text-lg'>Description</p>
              <div className='grid sm:grid-cols-2 p-4 sm:gap-x-4 md:gap-x-6 items-center gap-y-3'>
                {/* SIZE */}
                <div className='flex gap-1 items-center'>
                  size:
                  <button className='flex size-5 w-12 bg-[#E5E5E5] items-center justify-center'>
                    L
                  </button>
                </div>
                {/* Quantity */}
                <div className='flex gap-1 items-center'>
                  Qty:
                  <button className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                    -
                  </button>
                  {item.quantity}
                  <button className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* border */}
        <div className='flex border border-[#dddddc] items-center mx-7'></div>
        {/* Input */}
        <div className='grid px-6 gap-y-3'>
          <Input
            label='Code'
            placeholder='Enter promotion code to get discount'
            type='number'
            className='w-full'
            onChange={e => setCode(Number(e.target.value))}
          />
          <Button
            text='Apply'
            onClick={handleApplyCode}
          />
          <p>Your dummy code is: 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagCard;
