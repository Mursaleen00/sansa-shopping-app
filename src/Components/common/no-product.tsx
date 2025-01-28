// src/Components/common/no-product.tsx
'use client';

// Image Import
import EmptyCard from '@/../public/image/empty-card.svg';

// Constant Import
import { urls } from '@/constant/urls-data';

// Next Imports
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// React Import
import { FC } from 'react';

// Button Import
import Button from '../buttons/button';

// Use interface NoProductProps
interface NoProductProps {
  title?: string;
  description?: string;
}

const NoProduct: FC<NoProductProps> = ({ title, description }) => {
  // router
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
      <Image
        alt=''
        src={EmptyCard}
        width={195}
        height={203}
      />
      <div>
        {/* title */}
        <h3 className='text-secondary-700 text-2xl text-center'>{title}</h3>
        {/* description */}
        <p className='text-secondary-500 text-center'>{description}</p>
      </div>
      {/* Button  */}
      <Button
        text='Go to shopping'
        className='w-full max-w-[400px]'
        onClick={() => router.push(urls.product)}
      />
    </div>
  );
};

export default NoProduct;
