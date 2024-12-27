import Sansa from '@/../public/image/Sansa.png';
import Button from '@/Components/button';
import CheckBox from '@/Components/common/checkbox';
import Heading from '@/Components/common/heading';
import Paragraph from '@/Components/common/paragraph';
import Input from '@/Components/Input';
import { CheckBoxData, SignUpData } from '@/constant/signup';
import { urls } from '@/constant/urls';
import Image from 'next/image';
import Link from 'next/link';

const SignUpView = () => {
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
