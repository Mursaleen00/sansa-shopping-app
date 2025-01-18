import React from 'react';
import ShoppingBag from '../shopping-bag-page/shopping-bag';
import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import PriceSection from '../shopping-bag-page/price-section';
import Input from '../inputs/input';

const Details = () => {
  return (
    <div>
      <div className='flex gap-1'>
        <div className='text-[#B3B7B1]'>Home</div>/<div>Shopping bag</div>
      </div>
      <ShoppingBag />
      <div className='grid md:grid-cols-2 gap-6 py-7'>
        {/* 1st section  */}
        <div className=' bg-gray rounded-xl px-5 py-4 gap-y-6'>
          {/* user details  */}

          <h1 className=' py-2 text-xl'>Enter your details</h1>
          <div className='grid sm:grid-cols-2 gap-x-4 '>
            {UserDetails.map((item, index) => (
              <div
                key={index}
                className=''
              >
                <Input {...item} />
              </div>
            ))}
          </div>
          {/* Shipping Address   */}
          <h1 className='  py-6 text-xl'>Shipping Address </h1>
          <div className='grid sm:grid-cols-2 gap-x-4 '>
            {ShippingAddress.map((item, index) => (
              <div
                key={index}
                className=''
              >
                <Input {...item} />
              </div>
            ))}
          </div>
        </div>
        {/* 2nd section  */}
        <PriceSection />
      </div>
    </div>
  );
};

export default Details;
