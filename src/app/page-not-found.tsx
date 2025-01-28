// src\app\page-not-found.tsx

// Image Import
import noFound from '@/../public/image/404.svg';

// Component Import
import Button from '@/Components/buttons/button';

// Constant Image
import { urls } from '@/constant/urls-data';

// Next Import
import Image from 'next/image';

// React Import
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='min-h-[50dvh] flex items-center justify-center'>
      <div className='flex flex-col w-full justify-center items-center gap-y-6'>
        {/* Image  */}
        <Image
          alt=''
          src={noFound}
          width={311}
          height={160}
        />
        {/* Heading  */}
        <h2 className='text-secondary-700 lg:text-6xl text-2xl md:text-4xl'>
          Page Not Found
        </h2>
        {/* Paragraph  */}
        <p className='text-secondary-500 max-w-[400px] text-center'>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        {/* Button  */}
        <Link href={urls.home}>
          <Button text='Home Page' />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
