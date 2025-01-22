'use client';
import React from 'react';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { authPages, pages } from '@/constant/pagelist';
import { icons } from '@/constant/icons';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { urls } from '@/constant/urls';
import Sidebar from './Sidebar';
import { useTranslation } from 'react-i18next';
import { getCookie } from 'cookies-next';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const token = getCookie('token');

  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );

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
            {t(item.text)}
          </Link>
        ))}
      </div>

      {token ? (
        <div className='hidden md:flex items-center gap-x-3'>
          {icons.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='relative '
            >
              <Image
                alt=''
                src={item.icon}
                width={item.width}
                height={item.height}
              />

              {products && products?.length > 0 && index == 1 && (
                <div className='!size-3 text-[10px] flex items-center justify-center absolute rounded-full bg-primary top-0 -right-1'>
                  {products?.length}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className='hidden md:flex gap-x-8'>
          {authPages.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`${pathname === item.link ? 'text-primary' : 'text-secondary-700'}`}
            >
              {t(item.text)}
            </Link>
          ))}
        </div>
      )}

      <Sidebar
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
