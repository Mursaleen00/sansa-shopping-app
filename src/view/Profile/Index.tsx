import { profileData } from '@/constant/profileData';
import React from 'react';
import profilePicture from '@/../public/image/profile picture.svg';
import Image from 'next/image';
import Button from '@/Components/common/button';
import Input from '@/Components/Input';
const ProfileView = () => {
  return (
    <div className='grid  items-center flex-col gap-y-4 justify-evenly border-2 py-9 sm:mx-14 rounded-3xl border-gray'>
      <div className='grid  sm:grid-flow-col sm:gap-x-14 justify-between items-center'>
        <p className=' flex text-secondary-700 text-3xl sm:order-1 order-2 justify-center'>
          Name : Sameer ali
          <br /> ID : 8764
        </p>
        <div className='flex justify-around sm:order-2 order-1'>
          <Image
            alt={''}
            src={profilePicture}
            width={150}
            height={80}
          />
        </div>
      </div>
      <div className=' flex flex-col w-full items-center py-3 gap-y-8'>
        {profileData.map((item, index) => (
          <div
            key={index}
            className='w-full'
          >
            <Input {...item} />
          </div>
        ))}
      </div>
      <div className='flex flex-col sm:flex-row gap-y-2 gap-x-4'>
        <Button
          text='Cancel'
          isOutline
          className='w-full'
        />
        <Button
          text='Save'
          className='w-full'
        />
      </div>
    </div>
  );
};

export default ProfileView;
