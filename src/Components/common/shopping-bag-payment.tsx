import {
  chooseCard,
  ShoppingBagPaymentData,
} from '@/constant/shoppingBagPaymentData';
import React from 'react';
import Input from './Input';

const ShoppingBagPayment = () => {
  return (
    <div className='border-2 '>
      <div className='flex font-bold'>Payment Method</div>
      <div className='grid grid-cols-2 sm:grid-cols-4  sm:w-full '>
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
            className=''
          >
            <Input {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
