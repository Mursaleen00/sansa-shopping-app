// src/Components/home/hero-section.tsx
'use client';

// Next imports & React imports
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// Image import
import hero from '@/../public/image/hero.png';

//  Button import
import Button from '../buttons/button';

// Constant
import { urls } from '@/constant/urls-data';

const HeroSection = () => {
  // Translation
  const { t } = useTranslation();

  // Router
  const route = useRouter();

  return (
    <div className='grid md:grid-cols-2 gap-10 px-6 md:px-10 xl:px-24 py-20'>
      {/* 1st section  */}
      <div className='flex items-center !order-2 md:!order-1'>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-secondary-700 lg:text-3xl sm:text-2xl text-xl'>
            {t('Product Collection')}
          </h3>
          <p className='text-secondary-500 lg:text-xl text-base sm:text-lg'>
            {t(
              'Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we‘ve curated an extensive collection of dresses, shoes, and more to help you find your new favorites.',
            )}
          </p>
          {/* Button  */}
          <div className='flex gap-x-4 items-center'>
            <Button
              text={t('Shop Now')}
              onClick={() => route.push(urls.product)}
            />
            <Button
              text={t('Learn more')}
              isOutline
              onClick={() => route.push(urls.about)}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='place-self-center md:!order-2 !order-1'>
        <Image
          src={hero}
          alt=''
          width={457}
          height={457}
        />
      </div>
    </div>
  );
};

export default HeroSection;
