import React from 'react';
import { useTranslation } from 'react-i18next';
interface CheckBoxProps {
  text: string;
}

const CheckBox = ({ text }: CheckBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className='flex md:gap-x-4 gap-x-2 justify-start'>
      <input
        type='checkbox'
        className='accent-primary !border-secondary-500 md:w-4'
      />
      <p className='text-secondary-500 md:text-base text-sm'>{t(text)}</p>
    </div>
  );
};

export default CheckBox;
