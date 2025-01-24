'use client';
import BackButton from '@/Components/buttons/back-button';
import { useGetSingleProductsHook } from '@/services/products/get-single-product';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SingleProductDetails from './single-product-price';

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
      <div className='grid md:grid-cols-2 gap-5'>
        {/* 1st Section */}
        <div className='flex flex-col rounded-3xl bg-[#FBFBFB] gap-y-6 p-10 items-center'>
          <Image
            alt=''
            src={img}
            width={300}
            height={300}
          />
          <div className='grid grid-cols-2 sm:grid-cols-4  gap-x-3 gap-2 m-auto'>
            {data?.images.map(item => (
              <Image
                key={item}
                src={item || '/'}
                alt=''
                width={100}
                height={100}
                className={` border border-secondary-600 max-h-[300px] cursor-pointer rounded-xl p-4 ${
                  img === item && 'bg-primary-length'
                }`}
                onMouseEnter={() => setImg(item)}
              />
            ))}
          </div>
        </div>
        {/* 2nd section  */}
        <SingleProductDetails
        // setStep={() => setStep(step >= 2 ? step : step + 1)}
        // title ={img.thumbnail}
        // description={data?.images.description}
        // quantities={data}
        // products={products}
        // price={data?.images.price}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
