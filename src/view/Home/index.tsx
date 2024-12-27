import OrderCard from '@/Components/cards/order-card';
import ReviewCard from '@/Components/cards/review-card';
import HeroSection from '@/Components/home/hero-section';
import SecondaryHeading from '@/Components/secondary-heading';
import { orderCardData } from '@/constant/order-card';
import { reviewsData } from '@/constant/reviews';
import React from 'react';

const HomeView = () => {
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
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {reviewsData.map((item, i) => (
            <ReviewCard
              {...item}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
