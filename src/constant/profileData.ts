// 'use client';
// import React from 'react';
// import profilePicture from '@/../public/image/profile picture.svg';
// import Input from '@/Components/Input';
// import Button from '@/Components/common/button';
import Email from '@/../public/icons/email.svg';
import Password from '@/../public/icons/password.svg';
import Name from '@/../public/icons/name.svg';

export const profileData = [
  {
    legend: 'Good Name ',
    type: 'text',
    placeholder: 'Name',
    icon: Name.src,
    label: 'email',
  },
  {
    legend: 'Good Name ',
    type: 'text',
    placeholder: 'Name',
    icon: Name.src,
    label: '',
  },

  {
    legend: 'Email ',
    type: 'Email',
    placeholder: 'Enter you Email address',
    icon: Email.src,
    label: 'email',
  },
  {
    text: 'first Name ',
    legend: 'Conform Address  ',
    type: 'text,number',
    placeholder: 'Your Address',
    icon: Email.src,
    label: 'email',
  },
  {
    legend: 'Number',
    type: 'text',
    placeholder: 'Your number',
    icon: Email.src,
    label: 'email',
  },
  {
    legend: 'City ',
    type: 'text',
    placeholder: 'City',
    icon: Email.src,
    label: 'email',
  },
  {
    legend: 'Your Age ',
    type: 'number',
    placeholder: '',
    icon: Email.src,
    label: 'email',
  },
  {
    legend: 'Password',
    type: 'Password',
    placeholder: 'Password',
    icon: Password.src,
    label: 'email',
  },
];
