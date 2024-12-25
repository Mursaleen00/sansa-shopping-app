import React from 'react';
import Heart from '@/../public/icons/heart.svg';
import Profile from '@/../public/icons/profile.svg';
import Shop from '@/../public/icons/shop.svg';
import Search from '@/../public/icons/search.svg';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import Link from 'next/link';
// import { CiAlignLeft } from 'react-icons/ci';
// import { CiMenuBurger } from 'react-icons/ci';
// import { FiMoreVertical } from "react-icons/fi";

const icons = [
  { icon: Search, link: '/search' },
  { icon: Heart, link: '/heart' },
  { icon: Shop, link: '/shop' },
  { icon: Profile, link: '/profile' },
];
const pages = [
  { text: 'Home', link: '/' },
  { text: 'Product', link: '/product' },
  { text: 'About Us', link: '/about' },
  { text: 'Contact Us', link: '/contact' },

];
export interface icon {
  reacticon:string; 

}

const Navbar = () => {
  return (
    <div className='flex bg-primary-length justify-center items-center w-auto h-12 gap-x-[200px] '>
      <Link href='/'>
        <Image
          alt=''
          src={Sansa}
          width={100}
          className=''
        />
      </Link>
      <div className='hidden sm:flex  gap-x-4'>
        {/* <CiAlignLeft /> */}
        {/* <CiMenuBurger /> */}
        {/* <FiMoreVertical />*/}

        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
          >
            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <div className=' hidden lg:flex '>
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
