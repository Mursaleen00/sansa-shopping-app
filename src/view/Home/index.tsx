// src\view\Home\index.tsx
'use client';

// Components Imports
import SecondaryHeading from '@/Components/secondary-heading';
import ProductCard from '@/Components/cards/product-card';
import HeroSection from '@/Components/home/hero-section';
import ReviewCard from '@/Components/cards/review-card';
import OrderCard from '@/Components/cards/order-card';
import Button from '@/Components/buttons/button';
import Loader from '@/Components/common/loader';
import Input from '@/Components/inputs/input';
import Tab from '@/Components/common/tab';

//  Contact page Import
import ContactView from '../Contact/Index';

// Constants Imports
import { orderCardData } from '@/constant/order-card';
import { pickingData } from '@/constant/picking-data';
import { reviewsData } from '@/constant/reviews';
import { SignUpData } from '@/constant/signup-data';

// Services Imports
import { useGetProductsByCategoryHook } from '@/services/products/get-products-by-category';
import { useGetAllProductsHook } from '@/services/products/get-all-products';

// Next Imports & React Imports
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
import { useState } from 'react';

// Marquee Import
import Marquee from 'react-fast-marquee';

const HomeView = () => {
  // States
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);

  // Translation
  const { t } = useTranslation();

  // Tabs
  const tabs = [
    'beauty',
    'groceries',
    'furniture',
    'home-decoration',
    'laptops',
  ];

  // Get Products By Category
  const { data, isLoading } = useGetProductsByCategoryHook({
    sort: 'price',
    limit: 5,
    select: ['title', 'price', 'thumbnail', 'description'],
    category: tabs[tab2],
    order: tab !== 0 ? 'desc' : 'asc',
  });

  // Get Discount Products
  const { data: discountData, isLoading: discountLoading } =
    useGetAllProductsHook({
      sort: 'price',
      limit: 3,
      select: [
        'title',
        'price',
        'thumbnail',
        'description',
        'discountPercentage',
      ],
      skip: 56,
    });

  const products = data?.products;
  const discountProducts = discountData?.products;

  // Get Token
  const token = getCookie('token');

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
        <SecondaryHeading text={t('Review About Sansa')} />
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
        <SecondaryHeading text={t('Why You Picking Us')} />
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
        <SecondaryHeading text={t('Best Seller Products')} />
        <div className='flex items-center w-full gap-x-4'>
          <div className='w-full h-1 bg-primary rounded-full' />
          <Tab
            tabs={['Min', 'Max']}
            setTab={setTab}
            tab={tab}
            className='!w-full min-w-[200px]'
          />
          <div className='w-full h-1 bg-primary rounded-full' />
        </div>
        <Tab
          tabs={tabs}
          setTab={setTab2}
          tab={tab2}
        />
        {/* Loader   */}
        {isLoading ? (
          <div className='min-h-[50vh] flex items-center justify-center w-full'>
            <Loader />
          </div>
        ) : (
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full'>
            {products?.map((item, i) => (
              <ProductCard
                key={i}
                {...item}
              />
            ))}
          </div>
        )}
      </div>

      {/* Discount Products */}
      <div className='bg-gray gap-y-10 flex flex-col items-center px-6 w-full md:px-10 xl:px-24 py-10'>
        <SecondaryHeading text={t('Discount Products')} />
        {discountLoading ? (
          <div className='min-h-[50vh] flex items-center justify-center w-full'>
            <Loader />
          </div>
        ) : (
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full'>
            {discountProducts?.map((item, i) => (
              <ProductCard
                {...item}
                key={i}
                discount={item.discountPercentage}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stay In Touch */}
      {!token ? (
        <div className='bg-white px-6 md:px-10 xl:px-24 py-10 flex flex-col items-center w-full gap-y-6'>
          <SecondaryHeading text={t('Stay In Touch')} />
          <div className='gap-y-10 flex flex-col items-center max-w-[600px] justify-center border w-full border-secondary-100 rounded-3xl p-10'>
            <div className='w-full flex items-center flex-col gap-y-4'>
              <div>
                <h1 className='text-secondary-700 text-3xl'>
                  {t('Sign up as our customer')}
                </h1>
                <p className='text-secondary-500 text-center'>
                  {t('Please enter your information')}
                </p>
              </div>
              {SignUpData.map((item, index) => (
                <div
                  key={index}
                  className='w-full'
                >
                  <Input {...item} />
                </div>
              ))}
            </div>
            <Button
              text='Sign up'
              className='w-full border-none'
            />
          </div>
        </div>
      ) : (
        <ContactView />
      )}
    </div>
  );
};

export default HomeView;
