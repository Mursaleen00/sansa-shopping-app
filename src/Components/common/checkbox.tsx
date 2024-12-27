import React from 'react';
interface CheckBoxProps {
  text: string;
}

const CheckBox = ({ text }: CheckBoxProps) => {
  return (
    <div className='flex md:gap-x-4 gap-x-2 justify-start'>
      <input
        type='checkbox'
        name=''
        id=''
        className='accent-primary !border-secondary-500 md:w-4'
      />
      <p className='text-secondary-500 md:text-base text-sm'>{text}</p>
    </div>
  );
};

export default CheckBox;
