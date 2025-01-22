'use client';
import { profileData } from '@/constant/profile-data';
import React from 'react';
import Image from 'next/image';
import { useGetMeHook } from '@/services/user/get-all-products';
import { MeTypes } from '@/types/users/me';
import Button from '@/Components/buttons/button';
import Input from '@/Components/inputs/input';
import { useFormik } from 'formik';
import { ProfileSchema } from '@/schema/profile-schema';
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  contact: '',
  city: '',
  age: '',
  password: '',
};
const ProfileView = () => {
  const { data } = useGetMeHook();

  const { firstName, lastName, email, address, phone, age, password } =
    (data as MeTypes) || [];

  const userData = profileData({
    firstName,
    lastName,
    email,
    address: address?.address,
    city: address?.city,
    phone,
    age,
    password,
  });
  const formik = useFormik({
    initialValues,
    validationSchema: ProfileSchema,
    onSubmit: () => {},
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div>
      <div className='flex gap-1 sm:p-9 p-4'>
        <div className='text-[#B3B7B1]  '>Home</div>/<div>Profile</div>
      </div>
      <div className='grid items-center gap-y-4 sm:p-10 p-6 border-2 py-9 sm:mx-14 rounded-3xl border-gray'>
        <div className='grid sm:grid-flow-col sm:gap-x-14 justify-between items-center'>
          <p className=' flex text-secondary-700 text-3xl sm:order-1 order-2 justify-center'>
            Name : {data?.firstName}
            <br /> ID : {data?.id}
          </p>
          <div className='flex justify-around sm:order-2 order-1'>
            <Image
              alt={''}
              src={data?.image || '/'}
              width={150}
              height={80}
            />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          {userData.map((item, index) => (
            <div
              key={index}
              className={`${item.type == 'email' || item.type == 'password' ? 'md:!col-span-2' : ''}`}
            >
              <Input
                {...item}
                onChange={handleChange}
                value={values[item.name as keyof typeof values]}
                error={errors[item.name as keyof typeof errors]}
                touched={touched[item.name as keyof typeof touched]}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-y-2 gap-x-4'>
          <Button
            text='Cancel'
            isOutline
            className='w-full text-xl'
          />
          <Button
            text='Save'
            className='w-full text-xl'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
