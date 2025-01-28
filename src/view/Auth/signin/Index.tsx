// src/view/Auth/signin/Index.tsx
'use client';

// Image Import
import Sansa from '@/../public/image/Sansa.png';

// Components Imports
import Button from '@/Components/buttons/button';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Input from '@/Components/inputs/input';
import Paragraph from '@/Components/common/paragraph';

// Constant Import
import { CheckBoxData, SignInData } from '@/constant/signin-data';
import { urls } from '@/constant/urls-data';

//  Schema Import
import { LoginSchema } from '@/schema/login-schema';

// Services Import
import { useLoginMutation } from '@/services/auth/login';

// types Import
import { LoginType } from '@/types/users/login-user';

// Formik Import
import { useFormik } from 'formik';

// React Import & Next Import
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// initialValues
const initialValues = {
  username: '',
  password: '',
};

const SignInView = () => {
  // use Login Mutation
  const { mutateAsync, isPending } = useLoginMutation();

  // Router
  const router = useRouter();

  // Translation
  const { t } = useTranslation();

  // Formik
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async values => {
      const { username, password } = values;
      try {
        const res = (await mutateAsync({
          username,
          password,
          expiresInMins: 60,
        })) as LoginType;

        if (res) {
          setCookie('token', res?.accessToken);
          router.push(urls.home);
        }
      } catch (error) {
        return error;
      }
    },
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    formik;

  return (
    <div className='flex flex-col items-center gap-y-10 py-10'>
      {/* Image  */}
      <Image
        src={Sansa}
        alt='Sansa'
        width={100}
        height={100}
        className='md:w-44 w-32'
      />
      {/*  sign In section  */}
      <div className='border border-secondary-100 rounded-3xl md:p-10 p-5 flex flex-col gap-y-4 items-center max-w-[600px] w-full'>
        {/* Heading  */}
        <Heading title='Login to your account' />

        {/* Paragraph */}
        <Paragraph text='Please enter your information' />

        {/* Inputs  */}
        <div className='w-full flex flex-col gap-y-4'>
          {SignInData.map((item, index) => (
            <Input
              key={index}
              label={item.label}
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
          {/* CheckBox */}
          <div className='flex flex-col gap-y-2 my-6'>
            {CheckBoxData.map((item, index) => (
              <CheckBox
                key={index}
                text={item.text}
              />
            ))}
          </div>
          <p>{t('Username')}: jamesd</p>
          <p>{t('Password')}: jamesdpass</p>
        </div>
        {/* button  */}
        <Button
          text='Sign In'
          className='w-full border-none'
          onClick={handleSubmit}
          disabled={isPending}
        />
      </div>
      {/* urls sign up  */}
      <p className='md:text-base text-sm'>
        {t('Have not had account yet?')}{' '}
        <Link
          href={urls.signup}
          className='text-primary'
        >
          {t('Sign Up')}
        </Link>
      </p>
    </div>
  );
};

export default SignInView;
