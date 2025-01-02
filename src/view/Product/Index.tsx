'use client';
import Picture from '@/../public/icons/picture.svg';
import ProductCard from '@/Components/cards/product-card';
import Tab from '@/Components/common/tab';
import Input from '@/Components/Input';
import SecondaryHeading from '@/Components/secondary-heading';
import { ProductData } from '@/constant/product-data';
import { useState } from 'react';

const ProductView = () => {
  const [tab, setIsTab] = useState(0);

  return (
    <div className='px-6 md:px-12 xl:px-24 flex flex-col gap-y-10'>
      {/* All Product Categories */}
      <div className='flex justify-between items-center'>
        <p className='text-secondary-700 text-3xl'>All Product Categories</p>
        <Input
          label='Search'
          placeholder='Search all assets'
          icon={Picture.src}
          legend='Search'
          type='text'
        />
      </div>

      {/* Tabs */}
      <Tab
        setTab={setIsTab}
        tab={tab}
        tabs={[
          'Cloth',
          'Shoes',
          'Hats',
          'Skincare',
          'Electronic',
          'Arts',
          'Book',
        ]}
      />

      {/* Best Selling Products */}
      <div className='flex justify-between items-center'>
        <SecondaryHeading text='Best Selling Products:' />
        <p className='text-primary cursor-pointer'>See more+</p>
      </div>

      <div className='flex gap-x-6 overflow-x-auto pb-2'>
        {ProductData.map((item, i) => (
          <ProductCard
            {...item}
            key={i}
          />
        ))}
      </div>

      {/* New Products */}
      <div className='flex justify-between items-center'>
        <SecondaryHeading text='New Products:' />
        <p className='text-primary cursor-pointer'>See more+</p>
      </div>

      <div className='flex gap-x-6 overflow-x-auto pb-2'>
        {ProductData.map((item, i) => (
          <ProductCard
            {...item}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductView;
