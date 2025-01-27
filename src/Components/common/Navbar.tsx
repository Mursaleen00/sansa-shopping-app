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
import { useDispatch, useSelector } from 'react-redux';
import { LikedState, RootState } from '@/store/store';
import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import { removeAllProducts } from '@/store/Slice/product-slice';
import { removeAllLikedProduct } from '@/store/Slice/like-product-slice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { t } = useTranslation();

  const token = getCookie('token');

  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );
  const likedProducts = useSelector(
    (state: LikedState) => state.likedProductSlice.product,
  );
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    deleteCookie('token');
    router.push(urls.home);
    dispatch(removeAllProducts());
    dispatch(removeAllLikedProduct());
  };

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
            <p>{t(item.text)}</p>
          </Link>
        ))}
      </div>

      {token ? (
        <div className={'hidden md:flex items-center gap-x-3  '}>
          {icons.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`relative } `}
            >
              <Image
                alt=''
                src={item.icon}
                width={item.width}
                height={item.height}
              />
              {likedProducts && likedProducts?.length > 0 && index == 0 && (
                <div className=' flex size-4 text-[10px] items-center justify-center absolute rounded-full bg-error -top-2 -right-1 text-teal-50'>
                  {likedProducts?.length}
                </div>
              )}
              {products && products?.length > 0 && index == 1 && (
                <div className=' flex size-4 text-[10px] items-center justify-center absolute rounded-full bg-error -top-2 -right-1 text-teal-50'>
                  {products?.length}
                </div>
              )}
            </Link>
          ))}
          <FiLogOut
            className='flex size-5 cursor-pointer'
            width={24}
            height={30}
            onClick={handleLogOut}
          />
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
