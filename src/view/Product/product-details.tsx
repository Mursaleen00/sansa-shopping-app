// src/view/Product/product-details.tsx
'use client';

// Components Imports
import BackButton from '@/Components/buttons/back-button';
import BreadCrumb from '@/Components/common/bread-crumb';

//  Services Import
import { useGetSingleProductsHook } from '@/services/products/get-single-product';

// Next Import
import Image from 'next/image';

// React Import
import { useEffect, useState } from 'react';

// SingleProductDetails Import
import SingleProductDetails from './single-product-price';

//  Constant Import
import { urls } from '@/constant/urls-data';

const ProductDetails = ({ id }: { id: string }) => {
  // Data   GetSingleProductsHook
  const { data } = useGetSingleProductsHook({
    id,
  });
  //  State
  const [img, setImg] = useState(data?.images[0] || '/');

  useEffect(() => {
    if (data) setImg(data?.images[0]);
  }, [data]);

  return (
    <div className='flex flex-col gap-y-10 px-6 md:px-10 xl:px-24 py-10'>
      {/* BreadCrumb */}
      <div className='flex gap-3 flex-col'>
        <BreadCrumb
          items={[
            { name: 'Home', link: urls.home },
            { name: 'Products', link: urls.product },
            { name: data?.title || '', link: '' },
          ]}
        />
        {/* BackButton  */}
        <BackButton />
      </div>
      {/* Sections  */}

      <div className='grid md:grid-cols-2 gap-5'>
        {/* 1st Section */}

        <div className='flex flex-col rounded-3xl bg-[#FBFBFB] gap-y-6 p-10 items-center'>
          <Image
            alt=''
            src={img}
            width={300}
            height={300}
          />
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-2 m-auto'>
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
                onClick={() => setImg(item)}
              />
            ))}
          </div>
        </div>

        {/* 2nd section  */}
        <SingleProductDetails
          description={data?.description || ''}
          price={data?.price || 0}
          ratings={data?.rating || 0}
          title={data?.title || ''}
          totalReviews={data?.reviews.length || 0}
          thumbnail={data?.thumbnail || ''}
          id={data?.id || 0}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
