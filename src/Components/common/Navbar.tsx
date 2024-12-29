'use client';
import React from 'react';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { pages } from '@/constant/pagelist';
import { icons } from '@/constant/icons';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { urls } from '@/constant/urls';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='flex bg-primary-length justify-between items-center py-3 px-6 md:px-12 xl:px-24 z-50 shadow-md sticky top-0'>
      <Link href={urls.home}>
        <Image
          alt=''
          src={Sansa}
          width={100}
        />
      </Link>

      <HiMenuAlt3
        className='md:hidden flex cursor-pointer'
        size={24}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className='hidden md:flex gap-x-8'>
        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`${pathname === item.link ? 'text-primary' : 'text-secondary-700'}`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className='hidden md:flex items-center gap-x-3'>
        {icons.map((item, index) => (
          <Link
            href={item.link}
            key={index}
          >
            <Image
              alt=''
              src={item.icon}
              width={item.width}
              height={item.height}
            />
          </Link>
        ))}
      </div>

      <Sidebar
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
