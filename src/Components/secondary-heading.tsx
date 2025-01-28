// src\Components\secondary-heading.tsx

// React import
import React from 'react';

// Use interface ISecondaryHeading
interface ISecondaryHeading {
  text: string;
}
// SecondaryHeading
const SecondaryHeading = ({ text }: ISecondaryHeading) => {
  return <p className='border-b border-b-primary w-fit text-2xl'>{text}</p>;
};

export default SecondaryHeading;
