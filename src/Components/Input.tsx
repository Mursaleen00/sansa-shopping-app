import Image from 'next/image';
import { ChangeEventHandler, FocusEventHandler } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  icon: string;
  legend: string;
  name?: string;
  value?: string;
  error?: string;
  touched?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = ({
  icon,
  label,
  placeholder,
  type,
  legend,
  error,
  onBlur,
  onChange,
  touched,
  value,
  name,
}: InputProps) => {
  const isError = touched && error;

  return (
    <>
      <fieldset className='border border-secondary-300 rounded-md max-w-lg'>
        <legend className='px-2 md:ml-4 ml-2 text-secondary-300 md:text-base text-sm'>
          {legend}
        </legend>
        <div className=' flex items-center justify-center pb-1'>
          <Image
            src={icon}
            alt={icon}
            width={100}
            height={100}
            className='md:w-10 w-6 md:h-10 h-6'
          />
          <input
            type={type}
            id={label}
            placeholder={placeholder}
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            className='focus:outline-none ring-0 w-full text-secondary-500 placeholder:text-secondary-500 md:placeholder:text-base placeholder:text-sm md:font-medium font-normal'
          />
        </div>
      </fieldset>
      {isError && <p className='text-red-500 md:text-xs text-xs'>{error}</p>}
    </>
  );
};

export default Input;
