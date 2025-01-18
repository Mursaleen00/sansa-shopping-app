'use client';
import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import { DetailsSchema } from '@/schema/details-schema';
import { useFormik } from 'formik';
import Input from '../inputs/input';
import Button from '../buttons/button';

const initialValues = {
  email: '',
  contact: 0,
  firstName: '',
  lastName: '',
};

const Details = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: DetailsSchema,
    onSubmit: () => {},
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;
  console.log('🚀 ~ Details ~ errors:', errors);
  console.log('🚀 ~ Details ~ values:', values);

  return (
    <div>
      {/* 1st section  */}
      <div className=' bg-gray rounded-xl px-5 py-4 gap-y-6'>
        {/* user details  */}
        <div className='grid p-4'>
          <h1 className=' text-2xl pb-3'>Enter your details</h1>
          <div className='grid sm:grid-cols-2 gap-3'>
            {UserDetails.map((item, index) => (
              <Input
                value={
                  values[item.name as keyof typeof values] as string | number
                }
                onChange={handleChange}
                key={index}
                {...item}
                error={errors[item.name as keyof typeof errors]}
                touched={touched[item.name as keyof typeof touched]}
              />
            ))}
            <Button
              text='Submit'
              onClick={handleSubmit}
            />
          </div>
        </div>

        {/* Shipping Address   */}
        <div className='grid p-4'>
          <h1 className='text-2xl pb-3'>Shipping Address </h1>
          <div className='grid sm:grid-cols-2 gap-3 '>
            {ShippingAddress.map((item, index) => (
              <Input
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
