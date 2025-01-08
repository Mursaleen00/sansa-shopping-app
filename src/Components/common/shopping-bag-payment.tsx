import React from 'react';
import Input from '../Input';
import Profile from '@/../public/icons/profile.svg';
import ExpiredDate from '@/../public/icons/Expired date.svg' 

const ShoppingBagPayment = () => {
  return (
    <div>
      <div>
        <div>Payment Method</div>
        <div className=''>
          <div className=''>
            <Input
              label=''
              placeholder='Enter name on card'
              type='email'
              legend='Name on card'
              icon={Profile.src}
            />
          </div>
          <div>
            <Input
              label=''
              placeholder='Enter name on card'
              type='email'
              legend='Expired date'
              icon={ExpiredDate.src}
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
