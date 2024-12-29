'use client';

import OrderCard from '@/Components/cards/order-card';
import ReviewCard from '@/Components/cards/review-card';
import Tab from '@/Components/common/tab';
import HeroSection from '@/Components/home/hero-section';
import SecondaryHeading from '@/Components/secondary-heading';
import { orderCardData } from '@/constant/order-card';
import { reviewsData } from '@/constant/reviews';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const HomeView = () => {
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Order Section */}
      <div className='bg-gray gap-y-10 flex flex-col items-center px-6 md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text='How To Order Our Products' />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {orderCardData.map((item, i) => (
            <OrderCard
              {...item}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div className='bg-white gap-y-10 flex flex-col items-center px-6 md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text='Review About Sansa' />
        <Marquee className='flex items-center gap-x-6 -z-0'>
          <div className='grid grid-cols-5 gap-6'>
            {reviewsData.map((item, i) => (
              <ReviewCard
                {...item}
                key={i}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Why You Picking Us */}
      <div className='bg-gray gap-y-10 flex flex-col items-center px-6 w-full md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text='Why You Picking Us' />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full'>
          {pickingData.map((item, i) => (
            <div
              className='border p-6 rounded-xl border-border text-center w-full h-full'
              key={i}
            >
              <h3 className='text-primary font-bold text-6xl'>{item.value}</h3>
              <p className='text-secondary-300'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Seller Products */}
      <div className='bg-white gap-y-10 flex flex-col items-center px-6 md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text='Best Seller Products' />
        <div className='flex items-center w-full gap-x-4'>
          <div className='w-full h-1 bg-primary rounded-full' />
          <Tab
            tabs={['Clothing', 'Shoes']}
            setTab={setTab}
            tab={tab}
            className='!w-fit'
          />
          <div className='w-full h-1 bg-primary rounded-full' />
        </div>

        <Tab
          tabs={['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Activewear']}
          setTab={setTab2}
          tab={tab2}
        />
      </div>
    </div>
  );
};

export default HomeView;

const pickingData = [
  { label: 'Brands', value: '1000+' },
  { label: 'Customers', value: '35000+' },
  { label: 'Partners', value: '350+' },
];
