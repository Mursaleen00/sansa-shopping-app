import { ShoppingBagPaymentData } from '@/constant/shopping-Bag-Payment-Data';
import React from 'react';
import PriceSection from './price-section';
import Button from '../buttons/button';
import Paypal from '@/../public/image/PayPal.svg';
import GooglePay from '@/../public/image/GooglePay.svg';
import ApplePay from '@/../public/image/ApplePay.svg';
import Card from '@/../public/image/Id card.svg';
import Input from '../inputs/input';

const ShoppingBagPayment = () => {
  return (
    <div className='flex flex-col md:flex-row gap-y-4 sm:gap-x-4 justify-around w-full '>
      {/* first section  */}
      <div className=' grid grid-col bg-gray border-2 gap-y-2 md:gap-y-0 lg:gap-y-2  p-2 sm:px-4 w-full border-gray rounded-xl md:h-[400px] xl:h-[350px] '>
        <div className='grid font-bold p-2 text-2xl '>Payment Method</div>
        <div className='grid grid-cols sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-1'>
          <Button
            text='card'
            isOutline
            className='flex justify-around text-slate-500  !border-border  bg-white w-full rounded-lg '
            icon={Card}
          />

          <Button
            text='Paypal'
            isOutline
            className='flex justify-around text-slate-500  !border-border  bg-white w-full rounded-lg text-2xl  '
            icon={Paypal}
          />

          <Button
            text='G Pay'
            isOutline
            className='flex justify-around text-slate-500  !border-border  bg-white w-full rounded-lg '
            icon={GooglePay}
          />
          <Button
            text='A Pay'
            isOutline
            className='flex justify-around text-slate-500  !border-border  bg-white w-full rounded-lg '
            icon={ApplePay}
          />
        </div>
        <div>
          {ShoppingBagPaymentData.map((item, i) => (
            <div
              key={i}
              className={''}
            >
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
