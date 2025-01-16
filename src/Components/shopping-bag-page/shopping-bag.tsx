import React from 'react';
const step = ['Card', 'Shipping', 'Payment'];

const ShoppingBag = () => {
  const count = 0;
  return (
    <div>
      <h1 className='text-2xl font-bold py-6'>Shopping bag</h1>
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

export default ShoppingBag;
