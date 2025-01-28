// src/Components/shopping-bag-page/price-section.tsx

// Constant Import
import { ShoppingData } from '@/constant/shopping-data';

// Store Import
import { ProductState } from '@/store/Slice/product-slice';

// React Import & Next Import
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Button Import
import Button from '../buttons/button';

// Use interface PriceSectionProps
interface PriceSectionProps {
  totalItems?: number;
  setStep: () => void;
  quantities: number[];
  products?: ProductState[];
  price: number;
  step: number;
}

const PriceSection = ({
  setStep,
  totalItems,
  products,
  quantities,
  price,
  step,
}: PriceSectionProps) => {
  // Translation
  const { t } = useTranslation();

  return (
    <div>
      <div className='grid items-center gap-y-6 top-11 w-full'>
        {/* 2nd section  */}
        <div className='flex flex-col py-[40px] gap-y-3 sm:h-full bg-gray rounded-2xl w-full'>
          <h1 className='text-lg px-9  '>
            {t('Summary')} ( {totalItems} {t('items')} )
          </h1>
          {products?.map((item, i) => {
            return (
              <div
                className='flex justify-between px-9'
                key={i}
              >
                <p className='text-[#44483D]'>
                  {item.title} x {quantities?.[i]}
                </p>
                <p className='font-bold text-sm'>
                  {(item.price * (quantities?.[i] || 0)).toFixed(2)} USD
                </p>
              </div>
            );
          })}

          <div className='flex justify-between  items-center px-9 '>
            <p className='text-[#44483D]'>{t('Shipping')}</p>
            <p className='font-bold text-sm'>{t('Free')}</p>
          </div>
          <div className=' flex border  border-[#dddddc] items-center mx-7'></div>

          {/* total price */}
          <div className='flex justify-between  px-6'>
            <p className='text-[#44483D]'>Total</p>
            <p className='font-bold'>{price?.toFixed(2)} USD</p>
          </div>

          {/* Button */}
          <div className='flex justify-around '>
            <Button
              className='sm:w-full w-40 sm:mx-20'
              text={step == 2 ? 'Pay Now' : 'Continue'}
              onClick={setStep}
            />
          </div>
        </div>
        {/* 3rd section */}
        <div className='flex flex-col grid-rows-1 bg-gray sm:h-full rounded-2xl justify-around items-center py-7 gap-y-7'>
          <div className='flex flex-col sm:flex-row md:px-7 sm:py-10 sm:gap-x-5 '>
            <p>{t('Payment accepted:')}</p>
            <div className='flex flex-wrap gap-2 justify-around'>
              {ShoppingData.map((list, index) => (
                <Image
                  key={index}
                  src={list.icon || ''}
                  alt=''
                  width={35}
                  height={24}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col sm:flex-row md:px-7 pb-4 sm:gap-x-5'>
            <p>{t('Customer services:')}</p>
            <p className='font-bold'> 24/7 +855 (240) 389 328</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
