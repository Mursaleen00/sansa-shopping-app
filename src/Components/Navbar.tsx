import React from 'react';
import Heart from '@/../public/icons/heart.svg';
import Profile from '@/../public/icons/profile.svg';
import Shop from '@/../public/icons/shop.svg';
import Search from '@/../public/icons/search.svg';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import Link from 'next/link';
// import { link } from 'fs';

const icons = [
  { icon: Search, link: '/search' },
  { icon: Heart, link: '/heart' },
  { icon: Shop, link: '/shop' },
  { icon: Profile, link: '/profile' },
];
const pages = [
  { text: 'Home', link: '/home' },
  { text: 'Product', link: '/product' },
  { text: 'Blog', link: '/blog' },
  { text: 'About Us', link: '/about' },
  { text: 'Contact Us', link: '/contact' },
];

const Navbar = () => {
  return (
    <div className='flex bg-secondary justify-center items-center w-full h-12 gap-x-[200px] '>
      <Link href='/'>
        <Image
          alt=''
          src={Sansa}
          width={100}
          className=''
        />
      </Link>
      <div className='flex gap-x-4'>
        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
          >
            <p>{item.text}</p>
          </Link>
        ))}
        {/* <p className='text-primary'>Home</p>
        <p className=''>Product</p>
        <p className=''>Blog</p>
        <p className=''>About us</p>
        <p className=''>Contact Us</p> */}
      </div>

      <div className='flex gap-x-7 '>
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
              className=' text-[0px] '
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
