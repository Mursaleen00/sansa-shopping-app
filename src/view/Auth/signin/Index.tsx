'use client';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Paragraph from '@/Components/common/paragraph';
import Input from '@/Components/Input';
import { CheckBoxData, SignInData } from '@/constant/Signin';
import { urls } from '@/constant/urls';
import Link from 'next/link';
import React from 'react';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/Components/common/button';

const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  // password: yup.string().required('Password is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&#]/,
      'Password must contain at least one special character',
    )
    .required('Password is required'),
});

const SignInView = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log('🚀 ~ SignInView ~ value: onSubmit', values);
    },
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    formik;
  // console.log('🚀 ~ SignInView ~ values:', values);

  return (
    <div className='flex flex-col items-center h-screen gap-y-10'>
      <Image
        src={Sansa}
        alt='Sansa'
        width={100}
        height={100}
        className='md:w-44 w-32'
      />
      <div className='border border-secondary-100 rounded-3xl md:p-10 p-5 flex flex-col gap-y-4 items-center max-w-[600px] w-full'>
        <Heading title='Login to your account' />
        <Paragraph text='Please enter your information' />
        <div className='w-full flex flex-col gap-y-4'>
          {SignInData.map((item, index) => (
            <Input
              key={index}
              icon={item.icon}
              label={item.label}
              legend={item.legend}
              placeholder={item.placeholder}
              type={item.type}
              name={item.name}
              value={values[item.name as keyof typeof values]}
              error={errors[item.name as keyof typeof errors]}
              onBlur={handleBlur}
              onChange={handleChange}
              touched={touched[item.name as keyof typeof touched]}
            />
          ))}

          <div className='flex flex-col gap-y-2 my-6'>
            {CheckBoxData.map((item, index) => (
              <CheckBox
                key={index}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <Button
          text='Sign up'
          className='w-full border-none'
          onClick={handleSubmit}
        />
      </div>
      <p className='md:text-base text-sm'>
        Have not had account yet?
        <Link
          href={urls.signup}
          className='text-primary'
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignInView;
