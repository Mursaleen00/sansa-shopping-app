import React from 'react';
// import { LuFacebook } from 'react-icons/lu';
// import { PiInstagramLogo } from 'react-icons/pi';
// import { CiTwitter } from 'react-icons/ci';
// import { CiLinkedin } from 'react-icons/ci';
// import visa from '@/../public/image/Visa.svg';
import Image from 'next/image';
// import ApplePay from '@/../publpnpmic/image/ApplePay.svg';
// import UnionPay from '@/../public/image/UnionPay.svg';
// import PayPal from '@/../public/image/PayPal.svg';
// import Mastercard from '@/../public/image/Mastercard.svg';
// import GooglePay from '@/../public/image/GooglePay.svg';

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
    //         <LuFacebook />
    //         facebook
    //       </p>
    //       <p className='flex text-xs  gap-x-1 '>
    //         <PiInstagramLogo />
    //         Instagram
    //       </p>
    //       <p className='flex text-xs  gap-x-1'>
    //         <CiLinkedin />
    //         LinkedIn
    //       </p>
    //       <p className='flex text-xs  gap-x-1'>
    //         <CiTwitter />X
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
    <div className='bg-gray px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10'>
      {/* Upper Section */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-10'>
        {footerData.map((item, i) => (
          <div
            key={i}
            className='flex flex-col gap-y-5 border'
          >
            <p className='text-primary'>{item.title}</p>

            {item.title !== 'Payment Method' ? (
              <div className='flex flex-col gap-y-3'>
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
              <div className='grid grid-cols-4 gap-2'>
                {item.data.map((list, index) => (
                  <div
                    className='relative'
                    key={index}
                  >
                    <Image
                      src={list.icon || ''}
                      alt=''
                      fill
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className='border my-10 border-[#E1E4D5] w-full' />

      {/* Lower Section */}
      <div className=''></div>
    </div>
  );
};

export default Footer;

type list = {
  title: string;
  data: {
    text?: string;
    icon?: string;
  }[];
}[];

const footerData: list = [
  {
    title: 'Make money with us',
    data: [
      { text: 'Sell product on Sansa' },
      { text: 'Sell on Sansa Business' },
      { text: 'Self-Publish with Us' },
    ],
  },
  {
    title: 'Connects',
    data: [
      { text: 'facebook', icon: '/' },
      { text: 'Instagram', icon: '/' },
      { text: 'LinkedIn', icon: '/' },
      { text: 'X', icon: '/' },
    ],
  },
  {
    title: 'Payment Method',
    data: [
      { icon: '/' },
      { icon: '/' },
      { icon: '/' },
      { icon: '/' },
      { icon: '/' },
      { icon: '/' },
    ],
  },
];
