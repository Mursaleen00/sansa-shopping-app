import Image from 'next/image';
import React from 'react';
import profilePicture from '@/../public/image/profile picture.svg';
import Input from '@/Components/Input';
import Button from '@/Components/common/button';
import Email from '@/../public/icons/email.svg';

const ProfileView = () => {
  return (
    <div className='grid justify-evenly gap-5 py-4 px-7 rounded-xl sm:m-10'>
      {/* profile   */}
      <div className='flex justify-between items-center'>
        <p className='font-bold text-xl'>
          Name: sameer ali
          <br />
          ID: 9764
        </p>
        <Image
          alt={''}
          src={profilePicture}
          width={150}
          height={80}
        />
      </div>
      {/* Name  */}
      <div className='flex flex-col sm:flex-row gap-5  justify-start'>
        <div>
          <p className='font-bold text-sm'>First Name</p>
          <Input
            label=''
            placeholder=''
            legend='Good Name'
            type='text'
            icon='/'
          />
        </div>
        <div>
          <p className='font-bold text-sm'>Last Name</p>{' '}
          <Input
            label=''
            placeholder=''
            legend='Name'
            type='text'
            icon='/'
          />
        </div>
      </div>
      {/* Email  */}
      <div className='flex flex-col justify-end'>
        <p className='font-bold text-sm'>Email</p>
        <Input
          label=''
          placeholder=''
          legend='Email address'
          type='email'
          icon={Email.src}
        />
      </div>
      {/* conform Address */}
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-sm'>Conform Address</p>

        <Input
          label=''
          placeholder=''
          legend='address'
          type='text'
          icon='/'
        />
      </div>
      {/* contact number */}
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-sm'>Contact Number</p>

        <Input
          label=''
          placeholder=''
          legend='Num'
          type='text'
          icon='/'
        />
      </div>
      {/* City Name  */}
      <div className='flex gap-5 justify-around'>
        <div>
          <p className='font-bold text-sm'>City</p>

          <Input
            label=''
            placeholder=''
            legend='name'
            type='text'
            icon='/'
          />
        </div>
        <div>
          <p className='font-bold text-sm'>Your age</p>
          <Input
            label=''
            placeholder=''
            legend='age'
            type='number'
            icon='/'
          />
        </div>
      </div>
      {/* Password   */}
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-sm'>Password</p>{' '}
        <Input
          label=''
          placeholder=''
          legend='Num'
          type='password'
          icon='/'
        />
      </div>
      {/* Button  */}
      <div className='flex flex-col sm:flex-row md:gap-x-9 justify-around gap-y-2 '>
        <Button
          text='Cancel'
          className='w-[150px]'
          isOutline
        />
        <Button
          text='Save'
          className='w-[150px]'
        />
      </div>
    </div>
  );
};

export default ProfileView;
