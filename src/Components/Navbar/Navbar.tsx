import React from 'react';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { pages } from '@/constant/pagelist';
import { icons } from '@/constant/icons';

const Navbar = () => {
  return (
    <div className='flex bg-primary-length justify-around items-center w-auto h-12  '>
      <Link href='/'>
        <Image
          alt=''
          src={Sansa}
          width={100}
        />
      </Link>
      <div
        className='sm:hidden flex cursor-pointer '
        // onClick={Sidebar()}
      >
        <TiThMenu />
      </div>
      <div className='hidden sm:flex  gap-x-4'>
        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
          >
            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <div className=' hidden sm:flex '>
        {icons.map((item, index) => (
          <Link
            href={item.link}
            key={index}
          >
            <Image
              alt=''
              src={item.icon}
              width={40}
              height={80}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
