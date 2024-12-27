import Image from 'next/image';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  icon: string;
  legend: string;
}

const Input = ({ icon, label, placeholder, type, legend }: InputProps) => {
  return (
    <fieldset className='border border-secondary-300 rounded-md max-w-lg'>
      <legend className='px-2 ml-4 text-secondary-300'>{legend}</legend>
      <div className=' flex items-center justify-center pb-1'>
        <Image
          src={icon}
          alt={icon}
          width={100}
          height={100}
          className='w-10 h-10'
        />
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          className='focus:outline-none ring-0 w-full text-secondary-500 placeholder:text-secondary-500 font-medium'
        />
      </div>
    </fieldset>
  );
};

export default Input;
