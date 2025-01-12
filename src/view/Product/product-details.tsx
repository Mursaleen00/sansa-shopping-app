'use client';
import BackButton from '@/Components/buttons/back-button';
import { useGetSingleProductsHook } from '@/services/products/get-single-product';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductDetails = ({ id }: { id: string }) => {
  const { data } = useGetSingleProductsHook({
    id,
  });

  const [img, setImg] = useState(data?.images[0] || '/');

  useEffect(() => {
    if (data) setImg(data?.images[0]);
  }, [data]);

  return (
    <div className='flex flex-col gap-y-10 px-6 md:px-10 xl:px-24 py-10'>
      <BackButton />
      {/* 1st Section */}
      <div className='rounded-3xl bg-[#FBFBFB] gap-y-6 flex flex-col p-10 items-center'>
        <Image
          alt=''
          src={img}
          width={300}
          height={300}
        />
        <div className='flex items-center gap-x-4'>
          {data?.images.map(item => (
            <Image
              key={item}
              src={item || '/'}
              alt=''
              width={100}
              height={100}
              className={`border border-secondary-300 max-h-[300px] cursor-pointer rounded-xl p-4 ${
                img === item && 'bg-primary-length'
              }`}
              onMouseEnter={() => setImg(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
