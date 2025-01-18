import { cn } from '@/lib/cn-utils';
import Image from 'next/image';
import React from 'react';

interface InputProps {
  label?: string;
  image: string;
}

const Radio = ({
  label,
  className,
  image,
  ...res
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  return (
    <label
      htmlFor={label}
      className={cn(
        'h-11 w-full',
        'bg-white',
        'border !border-border',
        'rounded-lg shadow-box-shadow',
        'px-3',
        'flex justify-between items-center',
        className,
      )}
    >
      <div className='flex gap-x-2'>
        <Image
          alt='image'
          src={image}
          width={20}
          height={20}
        />
        <p>{label}</p>
      </div>
      <input
        type={'radio'}
        id={label}
        name='radio'
        className='!outline-none !ring-0 !border-none accent-primary'
        {...res}
      />
    </label>
  );
};

export default Radio;
