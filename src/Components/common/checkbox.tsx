// src/Components/common/checkbox.tsx

// React Imports
import React from 'react';
import { useTranslation } from 'react-i18next';

// Use interface CheckBoxProps
interface CheckBoxProps {
  text: string;
}

const CheckBox = ({ text }: CheckBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className='flex md:gap-x-4 gap-x-2 justify-start'>
      {/* Input */}
      <input
        type='checkbox'
        className='accent-primary !border-secondary-500 md:w-4'
      />
      {/*  user Text  */}
      <p className='text-secondary-500 md:text-base text-sm'>{t(text)}</p>
    </div>
  );
};

export default CheckBox;
