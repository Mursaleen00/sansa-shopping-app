'use client';
import Sansa from '@/../public/image/Sansa.png';
import Button from '@/Components/buttons/button';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Paragraph from '@/Components/common/paragraph';
import Input from '@/Components/inputs/input';

import { CheckBoxData, SignUpData } from '@/constant/signup';
import { urls } from '@/constant/urls';
import { SignUpSchema } from '@/schema/register-schema';
import { useRegisterMutation } from '@/services/auth/sign-up';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';

const initialValues = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
};

const SignUpView = () => {
  const { mutateAsync, isPending } = useRegisterMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: async value => {
      const { email, name, password } = value;
      try {
        await mutateAsync({
          email,
          password,
          firstName: name,
          username: name.toLocaleLowerCase().replaceAll(' ', ''),
        });
      } catch (error) {
        return error;
      }
    },
  });

  const { errors, handleBlur, handleChange, values, handleSubmit, touched } =
    formik;

  return (
    <div className='flex flex-col items-center gap-y-10 py-10'>
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
              label={item.label}
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
          disabled={isPending}
        />
      </div>
      <p className='md:text-base text-sm'>
        Already have account?{' '}
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
