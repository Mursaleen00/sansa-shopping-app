'use client';
import { pages } from '@/constant/pagelist';
import React from 'react';
import Link from 'next/link';
import { icons } from '@/constant/icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface ISidebar {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Sidebar = ({ isOpen, setIsOpen }: ISidebar) => {
  const pathName = usePathname();
  if (!isOpen) return null;

  return (
    <div className='md:hidden bg-primary-length p-6 absolute right-0 flex flex-col gap-y-4 top-12 w-full shadow-md z-[999]'>
      <div className='flex flex-col gap-y-2'>
        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={setIsOpen}
            className={`${pathName == item.link ? 'text-primary' : 'text-secondary-700'}`}
          >
            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <div className='flex items-center gap-x-2'>
        {icons.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={setIsOpen}
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
    </div>
  );
};

export default Sidebar;
