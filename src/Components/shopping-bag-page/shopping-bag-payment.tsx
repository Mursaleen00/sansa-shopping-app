import {
  chooseCard,
  ShoppingBagPaymentData,
} from '@/constant/shoppingBagPaymentData';
import React from 'react';
import Input from '../common/Input';
const ShoppingBagPayment = () => {
  return (
    <div className=' grid grid-col justify-around bg-gray border-2 gap-y-4 p-2 sm:p-4 border-gray rounded-xl  '>
      <div className='grid font-bold p-4 text-2xl'>Payment Method</div>
      <div className='grid grid-cols sm:grid-cols-4 gap-x-2 '>
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
            className='flex flex-col '
          >
            {/* <button className='flex border-2 absolute h-5 w-5 rounded justify-center items-center'></button> */}
            <Input {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
