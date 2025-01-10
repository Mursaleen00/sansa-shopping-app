import React from 'react';
import Input from '../Input';
import Profile from '@/../public/icons/profile.svg';
import ExpiredDate from '@/../public/icons/Expired date.svg';
import star from '@/../public/icons/3 Star.svg';
import IdCard from '@/../public/icons/Id card.svg';
const ShoppingBagPayment = () => {
  return (
    <div className='border-2 w-full'>
      <div className='flex font-bold mx-12'>Payment Method</div>

      <div className='grid grid-cols-4 sm:gap-x-9 sm:px-11'>
        <div className='grid items-center gap-x-[400px] '>
          <Input
            label=''
            placeholder='Enter name on card'
            type='email'
            legend='Name on card'
            icon={Profile.src}
          />
        </div>
        <div className='gap-x-2 '>
          <Input
            label=''
            placeholder='Enter name on card'
            type='email'
            legend='Expired date'
            icon={ExpiredDate.src}
          />
        </div>
      </div>
      {/* second line  */}
      <div className='grid grid-cols-4 sm:gap-x-9 sm:px-11'>
        <div className=''>
          <Input
            label=''
            placeholder='Enter card number'
            type='email'
            legend='Card number'
            icon={IdCard.src}
          />
        </div>
        <div className=''>
          <Input
            label=''
            placeholder='Enter CVV'
            type='email'
            legend='CVV'
            icon={star.src}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
