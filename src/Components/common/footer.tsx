'use client';
import React from 'react';
import Switch from 'react-switch';
import Googleplay from '@/../public/image/Googleplay.svg';
import googlePlay from '@/../public/image/google-play.png';
import appleStore from '@/../public/image/apple-store.png';
import Link from 'next/link';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import { FooterData } from '@/constant/FooterData';

const Footer = () => {
  return (
    <div className='bg-gray px-6 md:px-12 xl:px-24 flex flex-col w-full gap-y-10  py-10'>
      {/* Upper Section */}
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            alt=''
            src={Sansa}
            width={100}
          />
        </Link>
        <div className='flex gap-3 items-center'>
          <p>English</p>
          <Switch
            onChange={() => {}}
            checked={false}
            checkedIcon={false}
            uncheckedIcon={false}
            className='flex !bg-primary'
            onColor='#8ac732'
            offColor='#8ac732'
          />
          <p>Urdu</p>
        </div>
      </div>

      <div className='grid sm:grid-cols-3 gap-y-9'>
        {FooterData.map((item, i) => (
          <div
            key={i}
            className='flex flex-col gap-y-5 '
          >
            <p className='font-Roboto '>{item.title}</p>

            {item.title !== 'Payment Method' ? (
              <div className='flex flex-col gap-y-3 text-xs'>
                {item.data.map((list, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-x-1'
                  >
                    {list.icon && (
                      <Image
                        alt=''
                        src={list.icon || ''}
                        width={20}
                        height={20}
                      />
                    )}

                    <p>{list.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex flex-wrap w-full gap-2'>
                {item.data.map((list, index) => (
                  <Image
                    key={index}
                    src={list.icon || ''}
                    alt=''
                    width={35}
                    height={24}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className='border border-[#E1E4D5] w-full' />

      {/* Lower Section */}

      <div className='flex justify-center'>Copyright 2024</div>
    </div>
  );
};

export default Footer;
