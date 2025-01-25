import {
  cardData,
  ShoppingBagPaymentData,
} from '@/constant/shopping-Bag-Payment-Data';
import { AddToCardOnboardingType } from '@/types/products/add-to-card';
import { FC } from 'react';
import Input from '../inputs/input';
import Radio from '../inputs/radio';

interface Props {
  formik: AddToCardOnboardingType;
}

const ShoppingBagPayment: FC<Props> = ({ formik }) => {
  const { values, touched, handleChange, handleBlur, errors } = formik;

  const { bankDetails } = values;

  return (
    <div className='flex flex-col md:flex-row gap-y-4 sm:gap-x-4 justify-around w-full '>
      {/* first section  */}
      <div className=' grid grid-col bg-gray border-2 gap-y- md:gap-y-0 lg:gap-y-2  p-2 sm:px-4 w-full border-gray rounded-xl h-fit '>
        <div className='grid  p-2 text-2xl '>Payment Method</div>
        <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-1'>
          {cardData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center gap-y-2'
            >
              <Radio
                label={item.name}
                image={item.icon}
                onChange={handleChange}
                name={'bankDetails.selectedCard'}
                checked={item.value === bankDetails.selectedCard}
                value={item.value}
              />
            </div>
          ))}
        </div>

        {bankDetails.selectedCard == 'card' && (
          <div className='grid gap-y-2 pt-5'>
            {ShoppingBagPaymentData.map((item, i) => {
              return (
                <div key={i}>
                  <Input
                    {...item}
                    onChange={handleChange}
                    name={'bankDetails.' + item.name}
                    value={bankDetails[item.name as keyof typeof bankDetails]}
                    error={
                      errors.bankDetails?.[
                        item.name as keyof typeof errors.bankDetails
                      ]
                    }
                    touched={
                      touched.bankDetails?.[
                        item.name as keyof typeof touched.bankDetails
                      ]
                    }
                    onBlur={handleBlur}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
