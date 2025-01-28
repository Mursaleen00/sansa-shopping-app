// src/Components/common/Navbar.tsx
'use client';

// React Imports & Next Imports
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

// Cookie Import
import { getCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';

// Translation
import { useTranslation } from 'react-i18next';

// Icons Import
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

// Constant Imports
import { authPages, pages } from '@/constant/pagelist';
import { icons } from '@/constant/icons';
import { urls } from '@/constant/urls-data';

// Sidebar Import
import Sidebar from './sidebar';

// Image Import
import Sansa from '@/../public/image/Sansa.png';

// Store Imports
import { LikedState, RootState } from '@/store/store';
import { removeAllProducts } from '@/store/Slice/product-slice';
import { removeAllLikedProduct } from '@/store/Slice/like-product-slice';

const Navbar = () => {
  //  State
  const [isOpen, setIsOpen] = useState(false);

  // path Name
  const pathname = usePathname();

  // Translation
  const { t } = useTranslation();

  // Token
  const token = getCookie('token');

  //  products
  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );
  // Like product
  const likedProducts = useSelector(
    (state: LikedState) => state.likedProductSlice.product,
  );
  // router
  const router = useRouter();

  //  dispatch
  const dispatch = useDispatch();

  // handleLogOut
  const handleLogOut = () => {
    deleteCookie('token');
    router.push(urls.home);
    dispatch(removeAllProducts());
    dispatch(removeAllLikedProduct());
  };

  return (
    <div className='flex bg-primary-length justify-between items-center py-3 px-6 md:px-12 xl:px-24 z-50 shadow-md sticky top-0'>
      {/* logo  */}
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
      {/* Text section pages  */}
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
      {/* icons section pages  */}
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
        // Auth section pages
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
      {/* Sidebar  */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
