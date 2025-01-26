'use client';
import { cn } from '@/lib/cn-utils';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input = ({
  label,
  type,
  error,
  touched,
  required,
  className,
  ...res
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isError = error && touched;

  const { t } = useTranslation();

  return (
    <label
      htmlFor='input'
      className='space-y-1 '
    >
      {label && (
        <p className='text-secondary-700 text-sm font-normal capitalize line-clamp-1'>
          {t(label)}
          {required && <span className='text-red'>*</span>}
        </p>
      )}

      <div
        className={cn(
          'w-full h-11',
          'bg-white',
          'border !border-border',
          'rounded-lg shadow-box-shadow',
          'pr-3',
          'flex justify-between items-center',
          className,
          isError && '!border-red-400',
        )}
      >
        <input
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          id='input'
          className='w-full h-full px-3 py-2 outline-none ring-0 rounded-xl'
          {...res}
        />
        {type === 'password' && (
          <Fragment>
            {isVisible ? (
              <FiEye
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer text-secondary-300'
              />
            ) : (
              <FiEyeOff
                size={24}
                onClick={() => setIsVisible(!isVisible)}
                className='cursor-pointer text-secondary-300'
              />
            )}
          </Fragment>
        )}
      </div>
      {isError && <p className='text-red-600 text-xs'>{error}</p>}
    </label>
  );
};

export default Input;
