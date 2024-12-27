import { pages } from '@/constant/pagelist';
import React from 'react';
import Link from 'next/link';
import { icons } from '@/constant/icons';

const Sidebar = () => {
  return (
    <div className='md:hidden bg-primary-length gap-y-7'>
      {pages.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className='gap-y-7'
        >
          <p>{item.text}</p>
        </Link>
      ))}
      {icons.map((item, index) => (
        <Link
          href={item.link}
          key={index}
        >
          <p>{item.icon}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
