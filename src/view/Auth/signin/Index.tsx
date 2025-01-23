'use client';
import Sansa from '@/../public/image/Sansa.png';
import Button from '@/Components/buttons/button';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Input from '@/Components/inputs/input';
import Paragraph from '@/Components/common/paragraph';
import { CheckBoxData, SignInData } from '@/constant/Signin';
import { urls } from '@/constant/urls';
import { LoginSchema } from '@/schema/login-schema';
import { useLoginMutation } from '@/services/auth/login';
import { LoginType } from '@/types/users/login-user';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const initialValues = {
  username: '',
  password: '',
};

const SignInView = () => {
  const { mutateAsync, isPending } = useLoginMutation();
  const router = useRouter();

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

          <div className='flex flex-col gap-y-2 my-6'>
            {CheckBoxData.map((item, index) => (
              <CheckBox
                key={index}
                text={item.text}
              />
            ))}
          </div>
          <p>Username: jamesd</p>
          <p>Password: jamesdpass</p>
        </div>
        <Button
          text='Sign In'
          className='w-full border-none'
          onClick={handleSubmit}
          disabled={isPending}
        />
      </div>
      <p className='md:text-base text-sm'>
        Have not had account yet?{' '}
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
