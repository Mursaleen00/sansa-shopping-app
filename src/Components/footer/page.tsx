'use client';
import React from 'react';
import Switch from 'react-switch';
import Googleplay from '@/../public/image/Googleplay.svg';
import Link from 'next/link';
import Sansa from '@/../public/image/Sansa.png';
import Image from 'next/image';
import { FooterData } from '@/constant/FooterData';

const Footer = () => {
  return (
    // <div className='flex flex-row bg-gray h-[450px] w-full justify-around '>
    //   <div className='flex flex-col gap-y-2 '>
    //     <h1 className='font-black'>Make money with us</h1>
    //     <div className='flex flex-col gap-y-1 '>
    //       <p className='text-xs '>Sell product on Sansa</p>
    //       <p className='text-xs '>Sell on Sansa Business</p>
    //       <p className='text-xs '>Self-Publish with Us</p>
    //     </div>
    //   </div>
    //   <div className='flex flex-col gap-y-2 border-2 items-center'>
    //     <h2 className='font-black'>Connects</h2>
    //     <div className='flex flex-col gap-y-1 '>
    //       <p className='flex  text-xs  gap-x-1'>

    //         facebook
    //       </p>
    //       <p className='flex text-xs  gap-x-1 '>

    //         Instagram
    //       </p>
    //       <p className='flex text-xs  gap-x-1'>

    //         LinkedIn
    //       </p>
    //       <p className='flex text-xs  gap-x-1'>
    //         X
    //       </p>
    //     </div>
    //   </div>
    //   <div>
    //     <h3 className='font-bold'>Payment Method</h3>
    //     <div>
    //       <Image
    //         alt=''
    //         src={visa}
    //         width={50}
    //       />
    //       <Image
    //         alt=''
    //         src={ApplePay}
    //         width={50}
    //       />
    //       <Image
    //         alt=''
    //         src={UnionPay}
    //         width={50}
    //       />
    //       <Image
    //         alt=''
    //         src={PayPal}
    //         width={50}
    //       />
    //       <Image
    //         alt=''
    //         src={Mastercard}
    //         width={50}
    //       />
    //       <Image
    //         alt=''
    //         src={GooglePay}
    //         width={50}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className='bg-gray px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10  items-center'>
      {/* Upper Section */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-9'>
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
                        width={24}
                        height={24}
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
      <div className='border my-10 border-[#E1E4D5] w-full' />

      {/* Lower Section */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-around gap-y-8 items-center '>
        <div className=''>
          <Link href='/'>
            <Image
              alt=''
              src={Sansa}
              width={100}
            />
          </Link>
        </div>
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

        <div className='flex md:flex-col  items-center gap-x-4 gap-y-3 '>
          <p>Download App</p>
          <Image
            alt=''
            src={Googleplay}
            width={80}
          />
        </div>
      </div>
      <div className='flex justify-center pt-9'>Copyright 2024</div>
    </div>
  );
};

export default Footer;
