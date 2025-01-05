import React from 'react';

const step = ['Step 1', 'Step 2', 'Step 3'];

const Shoppingbag = () => {
  const count = 0;
  return (
    <div className='relative flex justify-around items-center w-full'>
      <div className='border w-full absolute -z-10 top-2' />
      {step.map((item, i) => (
        <div
          className='flex flex-col items-center'
          key={i}
        >
          <div
            className={`size-4 border rounded-full ${count >= i ? 'bg-primary' : 'bg-white'}`}
          />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Shoppingbag;
