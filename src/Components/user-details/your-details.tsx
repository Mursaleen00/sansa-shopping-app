import React from 'react';
import ShoppingBag from '../shopping-bag-page/shopping-bag';
import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import Input from '../common/input';
import PriceSection from '../shopping-bag-page/price-section';

const Details = () => {
  return (
    <div>
      <div className='flex gap-1'>
        <div className='text-[#B3B7B1]'>Home</div>/<div>Shopping bag</div>
      </div>
      <ShoppingBag />
      <div className='grid grid-cols-2 gap-x-6'>
        {/* 1st section  */}
        <div className=' bg-gray rounded-xl'>
          {/* user details  */}
          <h1 className='px-5 py-2  text-xl'>Enter your details</h1>
          <div className='grid sm:grid-cols-2 gap-x-4 p-5'>
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
          <h1 className='px-5 py-2  text-xl'>Shipping Address </h1>
          <div className='grid sm:grid-cols-2 gap-x-4 p-5'>
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
