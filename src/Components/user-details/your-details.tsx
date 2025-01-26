'use client';
import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import { FC } from 'react';
import Input from '../inputs/input';
import { AddToCardOnboardingType } from '@/types/products/add-to-card';
import { useTranslation } from 'react-i18next';

interface Props {
  formik: AddToCardOnboardingType;
}

const Details: FC<Props> = ({ formik }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  const { t } = useTranslation();

  return (
    <div>
      {/* 1st section  */}
      <div className=' bg-gray rounded-xl px-5 py-4 gap-y-6'>
        {/* user details  */}
        <div className='grid p-4'>
          <h1 className=' text-2xl pb-3'>{t('Enter your details')}</h1>
          <div className='grid sm:grid-cols-2 gap-3'>
            {UserDetails.map((item, index) => (
              <Input
                {...item}
                name={'personalDetails.' + item.name}
                value={
                  values.personalDetails?.[
                    item.name as keyof typeof values.personalDetails
                  ] as string | number
                }
                onChange={handleChange}
                key={index}
                error={
                  errors.personalDetails?.[
                    item.name as keyof typeof errors.personalDetails
                  ]
                }
                touched={
                  touched.personalDetails?.[
                    item.name as keyof typeof touched.personalDetails
                  ]
                }
                onBlur={handleBlur}
              />
            ))}
          </div>
        </div>

        {/* Shipping Address   */}
        <div className='grid p-4'>
          <h1 className='text-2xl pb-3'>{t('Shipping Address')}</h1>
          <div className='grid sm:grid-cols-2 gap-3 '>
            {ShippingAddress.map((item, index) => (
              <Input
                {...item}
                key={index}
                onChange={handleChange}
                name={'personalDetails.' + item.name}
                value={
                  values.personalDetails?.[
                    item.name as keyof typeof values.personalDetails
                  ]
                }
                error={
                  errors.personalDetails?.[
                    item.name as keyof typeof errors.personalDetails
                  ]
                }
                touched={
                  touched.personalDetails?.[
                    item.name as keyof typeof touched.personalDetails
                  ]
                }
                onBlur={handleBlur}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
