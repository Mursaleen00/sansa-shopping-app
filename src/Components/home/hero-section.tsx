import React from 'react';
import hero from '@/../public/image/hero.png';
import Image from 'next/image';
import Button from '../common/button';

const HeroSection = () => {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-6 px-6 md:px-10 xl:px-24'>
      <div className='flex items-center !order-2 md:!order-1'>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-secondary-700 lg:text-3xl sm:text-2xl text-xl'>
            Product Collection
          </h3>
          <p className='text-secondary-500 lg:text-xl text-base sm:text-lg'>
            Welcome to our online fashion haven, where we invite you to embark
            on a thrilling journey of discovery. We understand that fashion is
            an expression of your unique personality, and we&lsquo;ve curated an
            extensive collection of dresses, shoes, and more to help you find
            your new favorites.
          </p>

          <div className='flex gap-x-4 items-center'>
            <Button text={'Shop Now'} />
            <Button
              text={'Learn more'}
              isOutline
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
