import React from 'react';
import Heading from './shopping-bag-heading';

const step = ['Card', 'Shipping', 'Payment'];

const Shoppingbag = () => {
  const count = 0;
  return (
    <div>
      <Heading />
      <div className='relative flex justify-around items-center w-full'>
        <div className='border border-secondary-300 w-full absolute -z-10 top-2' />

        {step.map((item, i) => (
          <div
            className='flex flex-col items-center'
            key={i}
          >
            <div
              className={`size-5 border rounded-full ${count >= i ? 'bg-primary' : 'bg-white'}`}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoppingbag;
