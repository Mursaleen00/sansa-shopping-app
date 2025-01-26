'use client';
import EmptyCard from '@/../public/image/empty-card.svg';
import { urls } from '@/constant/urls';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import Button from '../buttons/button';

interface NoProductProps {
  title?: string;
  description?: string;
}

const NoProduct: FC<NoProductProps> = ({ title, description }) => {
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
        <h3 className='text-secondary-700 text-2xl text-center'>{title}</h3>
        <p className='text-secondary-500 text-center'>{description}</p>
      </div>

      <Button
        text='Go to shopping'
        className='w-full max-w-[400px]'
        onClick={() => router.push(urls.product)}
      />
    </div>
  );
};

export default NoProduct;
