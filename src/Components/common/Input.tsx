// Utils
import { cn } from '@/lib/cn-utils';

// React

import React from 'react';

export interface IInput {
  label?: string;
  name?: string;
  type?: HTMLInputElement['type'];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  required?: boolean;
}

const Input = ({
  className,
  label,
  name,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  value,
  touched,
  required,
}: IInput) => {
  const isError = error && touched;

  return (
    <label
      htmlFor='input'
      className='space-y-1'
    >
      <p className='text-text-primary text-sm font-normal'>
        {label}
        {required && <span className='text-red'>*</span>}
      </p>
      <input
        type={type}
        // id="input"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        className={cn(
          'w-full  h-11',
          'outline-none ring-0 border border-divider',
          'rounded-lg shadow-box-shadow',
          'px-3 py-2 ',
          className,
          isError && '!border-red',
        )}
      />
      {isError && <p className='text-error text-red text-xs'>{error}</p>}
    </label>
  );
};

export default Input;
