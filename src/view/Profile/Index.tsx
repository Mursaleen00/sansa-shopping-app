// src/view/profile/Index.tsx
'use client';

// React Imports
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

// Constant Imports
import { profileData } from '@/constant/profile-data';
import { urls } from '@/constant/urls-data';

// Services Import
import { useGetMeHook } from '@/services/user/get-me';

// Types Import
import { MeTypes } from '@/types/users/me';

// Components Import
import Button from '@/Components/buttons/button';
import Input from '@/Components/inputs/input';
import BreadCrumb from '@/Components/common/bread-crumb';

// Formik Import
import { useFormik } from 'formik';

// Schema Import
import { profileSchema } from '@/schema/profile-schema';

// initialValues
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
  // Hook
  const { data } = useGetMeHook();
  //  props
  const { firstName, lastName, email, address, phone, age, password } =
    (data as MeTypes) || [];
  // userData
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

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema: profileSchema,
    onSubmit: () => {},
  });

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    formik;

  // useEffect
  useEffect(() => {
    if (data) {
      setFieldValue('firstName', firstName);
      setFieldValue('lastName', lastName);
      setFieldValue('email', email);
      setFieldValue('address', address?.address);
      setFieldValue('city', address?.city);
      setFieldValue('contact', phone);
      setFieldValue('age', age);
      setFieldValue('password', password);
    }
  }, [data]);

  // Translation
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-y-10'>
      {/* BreadCrumb */}
      <BreadCrumb
        items={[
          { name: 'Home', link: urls.home },
          { name: 'Profile', link: urls.profile },
        ]}
      />
      {/* Profile Section  */}
      <div className='grid items-center gap-y-4 sm:p-10 p-6 border-2 py-9 sm:mx-14 rounded-3xl border-gray'>
        <div className='grid sm:grid-flow-col sm:gap-x-14 justify-between items-center'>
          <p className=' flex text-secondary-700 text-3xl sm:order-1 order-2 justify-center'>
            {t('Name')}: {data?.firstName} {data?.lastName}
          </p>
          <div className='flex justify-around sm:order-2 order-1'>
            {/* Image */}
            <Image
              alt={''}
              src={data?.image || '/'}
              width={150}
              height={80}
            />
          </div>
        </div>
        {/* ------------------------User Data------------------- */}
        <div className='grid md:grid-cols-2 gap-4'>
          {userData.map((item, index) => (
            <div
              key={index}
              className={`${item.type == 'email' || item.type == 'password' ? 'md:!col-span-2' : ''}`}
            >
              {/* Input  */}
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
        {/* Buttons  */}
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
