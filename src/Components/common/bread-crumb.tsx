'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BreadCrumbProps {
  items: {
    name: string;
    link: string;
  }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  const isLastItem = (index: number) => index === items.length - 1;

  const { t } = useTranslation();

  return (
    <div className='flex gap-1 items-center'>
      {items.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.link}
            className='flex gap-1 items-center cursor-pointer'
          >
            <p
              className={`${isLastItem(i) ? 'text-secondary-700' : 'text-secondary-300'}`}
            >
              {t(item.name)}
            </p>
            {!isLastItem(i) && <span>/</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
