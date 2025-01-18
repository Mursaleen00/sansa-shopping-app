import React from 'react';
interface Props {
  step: number;
}

const StepBar = ({ step }: Props) => {
  const steps = ['Card', 'Shipping', 'Payment'];
  return (
    <div>
      <h1 className='text-2xl font-bold py-6'>Shopping bag</h1>
      <div className='relative flex justify-around items-center w-full'>
        <div className='border border-[#44483D] w-full absolute -z-10 top-2' />

        {steps.map((item, i) => (
          <div
            className='flex flex-col items-center'
            key={i}
          >
            <div
              className={`size-5 border rounded-full ${step >= i ? 'bg-primary' : 'bg-white'}`}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
