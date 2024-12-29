'use client';
import Sansa from '@/../public/image/Sansa.png';
import Button from '@/Components/common/button';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Paragraph from '@/Components/common/paragraph';
import Input from '@/Components/Input';
import { CheckBoxData, SignUpData } from '@/constant/signup';
import { urls } from '@/constant/urls';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};

const SignUpSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  // password: yup.string().required('Password is required'),
  // confirmPassword: yup.string().required('Confirm Password is required'),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpView = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: () => {
      console.log('🚀 ~ SignUpView ~ value: onSubmit', values);
    },
  });
  const { errors, handleBlur, handleChange, values, handleSubmit, touched } =
    formik;
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
        <Heading title='Sign up as our customer' />
        <Paragraph text='Please enter your information' />
        <div className='w-full flex flex-col gap-y-4'>
          {SignUpData.map((item, index) => (
            <Input
              key={index}
              icon={item.icon}
              label={item.label}
              legend={item.legend}
              placeholder={item.placeholder}
              type={item.type}
              name={item.name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors[item.name as keyof typeof errors]}
              value={values[item.name as keyof typeof values]}
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
        Already have account?
        <Link
          href={urls.signin}
          className='text-primary'
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpView;
