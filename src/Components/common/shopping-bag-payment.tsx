import {
  chooseCard,
  ShoppingBagPaymentData,
} from '@/constant/shoppingBagPaymentData';
import React from 'react';
import Input from './Input';

const ShoppingBagPayment = () => {
  return (
    <div className='border-2 w-full'>
      <div className='flex font-bold mx-12'>Payment Method</div>
      <div>
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
