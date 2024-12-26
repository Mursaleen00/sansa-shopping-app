import React from 'react';

interface ISecondaryHeading {
  text: string;
}

const SecondaryHeading = ({ text }: ISecondaryHeading) => {
  return <p className='border-b border-b-primary w-fit text-2xl'>{text}</p>;
};

export default SecondaryHeading;
