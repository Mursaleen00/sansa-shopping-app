'use client';

import OrderCard from '@/Components/cards/order-card';
import ProductCard from '@/Components/cards/product-card';
import ReviewCard from '@/Components/cards/review-card';
import Tab from '@/Components/common/tab';
import HeroSection from '@/Components/home/hero-section';
import SecondaryHeading from '@/Components/secondary-heading';
import { orderCardData } from '@/constant/order-card';
import { pickingData } from '@/constant/picking-data';
import { discountProduct, ProductData } from '@/constant/product-data';
import { reviewsData } from '@/constant/reviews';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

const HomeView = () => {
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Order Section */}
      <div className='bg-gray gap-y-10 flex flex-col items-center px-6 md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text={t('How To Order Our Products')} />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {orderCardData.map((item, i) => (
            <OrderCard
              {...item}
              title={t(item.title)}
              description={t(item.description)}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* Review Section */}
      <div className='bg-white gap-y-10 flex flex-col items-center  py-10'>
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
              <h3 className='text-primary font-bold text-6xl'>
                {t(item.value)}
              </h3>
              <p className='text-secondary-300'>{t(item.label)}</p>
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
            className='!w-full min-w-[200px]'
          />
          <div className='w-full h-1 bg-primary rounded-full' />
        </div>
        <Tab
          tabs={['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Activewear']}
          setTab={setTab2}
          tab={tab2}
        />

        <div className='grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full'>
          {ProductData.map((item, i) => (
            <ProductCard
              {...item}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* Discount Products */}
      <div className='bg-gray gap-y-10 flex flex-col items-center px-6 w-full md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text='Discount Products' />
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 w-full'>
          {discountProduct.map((item, i) => (
            <ProductCard
              {...item}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* Stay In Touch */}
      <div className='bg-white gap-y-10 flex flex-col items-center px-6 md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text={t('Stay In Touch')} />
      </div>
    </div>
  );
};

export default HomeView;
