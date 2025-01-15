import {
  chooseCard,
  ShoppingBagPaymentData,
} from '@/constant/shopping-Bag-Payment-Data';
import React from 'react';
import Input from '../common/Input';
import PriceSection from './price-section';
const ShoppingBagPayment = () => {
  return (
    <div className='flex flex-col md:flex-row gap-y-4 sm:gap-x-4 justify-around w-full '>
      {/* first section  */}
      <div className=' grid grid-col bg-gray border-2 gap-y-2 md:gap-y-0 lg:gap-y-2  p-2 sm:px-4 w-full border-gray rounded-xl md:h-[400px] xl:h-[350px] '>
        <div className='grid font-bold p-2 text-2xl '>Payment Method</div>
        <div className='grid grid-cols sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-x-2 '>
          {chooseCard.map((item, index) => (
            <div
              key={index}
              className=''
            >
              <Input {...item} />
            </div>
          ))}
        </div>
        <div>
          {ShoppingBagPaymentData.map((item, i) => (
            <div
              key={i}
              className={''}
            >
              {/* <button className='flex border-2 absolute h-5 w-5 rounded justify-center items-center'></button> */}
              <Input {...item} />
            </div>
          ))}
          <div className='flex flex-col sm:flex-row justify-end sm:gap-x-2 py-1'>
            <p>Where is Card number?</p>
            <p>Where is Expired date?</p>
            <p>Where is my CVV?</p>
          </div>
        </div>
      </div>
      {/* Second section  */}
      <div className='grid w-full'>
        <PriceSection />
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
