// src/Components/user-details/your-details.tsx
'use client';

// constant Import
import { ShippingAddress, UserDetails } from '@/constant/user-details-data';

// Fc Import
import { FC } from 'react';

// Input Import
import Input from '../inputs/input';

//  types Import
import { AddToCardOnboardingType } from '@/types/products/add-to-card';

// Translation
import { useTranslation } from 'react-i18next';

// Use interface Props
interface Props {
  formik: AddToCardOnboardingType;
}

const Details: FC<Props> = ({ formik }) => {
  // Formik
  const { values, errors, touched, handleChange, handleBlur } = formik;

  // Translation
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
              // Input
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
              // Input
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
