'use client';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../buttons/button';
import Input from '../inputs/input';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

interface CardItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  data: CardItem[];
  totalPrice: number;
  setPrice: (price: number) => void;
  price: number;
}

const ShoppingBagCard = ({ price, totalPrice, setPrice }: Props) => {
  const [code, setCode] = useState<number>(0);

  const handleApplyCode = () => {
    if (code === 12345) setPrice(price - 10);
    else setPrice(totalPrice);
  };
  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );
  console.log(products);

  const [Quantity, setQuantity] = useState(0);

  return (
    <div className='md:gap-x-5 gap-y-7 '>
      <div className='grid grid-row bg-gray w-full  h-fit rounded-2xl py-6 gap-y-5'>
        {/* White shirt */}
        {products?.map((item, i) => (
          <div
            key={i}
            className='flex sm:flex-row flex-col border justify-start items-center p-8  border-border mx-5 rounded-md sm:gap-x-9'
          >
            <Image
              alt={''}
              src={item.thumbnail}
              width={100}
              height={100}
            />
            <div>
              <h1 className='flex font-bold text-lg'>
                {item.title}
                <br /> {item.price} USD
              </h1>
              <p className='text-lg'>Description {item.description}</p>
              <div className='grid sm:grid-cols-2 p-4 sm:gap-x-4 md:gap-x-6 items-center gap-y-3'>
                {/* SIZE */}
                {/* <div className='flex gap-1 items-center'>
                  size:
                  <button className='flex size-5 w-12 bg-[#E5E5E5] items-center justify-center'></button>
                </div> */}
                {/* Quantity */}
                <div className='flex gap-1 items-center'>
                  Qty:
                  {Quantity !== 1 && (
                    <button
                      className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'
                      onClick={() =>
                        setQuantity(Quantity >= 0 ? Quantity : Quantity - 1)
                      }
                    >
                      -
                    </button>
                  )}
                  {Quantity !== 1 && (
                    <button
                      className='flex size-5 rounded-full items-center justify-center bg-[#E5E5E5]'
                      onClick={() =>
                        setQuantity(Quantity >= 0 ? Quantity : Quantity + 1)
                      }
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className='grid text-[#BA1A1A]'>remove</div>
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
