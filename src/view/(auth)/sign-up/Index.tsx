import Image from 'next/image';
import Sansa from '@/../public/image/Sansa.png';
import Heading from '@/Components/common/heading';

const SignUpView = () => {
  return (
    <div className='flex-col gap-10 justify-self-center '>
      <Image
        src={Sansa}
        alt='Sansa'
        width={100}
        height={100}
      />
      <div className='border'>
        <Heading title='Sign up as our customer' />
        <p>Please enter your information</p>
      </div>
    </div>
  );
};

export default SignUpView;
