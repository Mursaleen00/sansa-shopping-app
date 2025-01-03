import React from 'react';

const shoppingbag = () => {
  return (
    <div className='relative flex items-center m-auto border mt-5 mb-6 w-[1202px] justify-center  '>
      <div className='absolute flex gap-9'>
        <div className=' border-8 rounded-full border-black bg-primary '></div>
        <div className=' border-8  rounded-full border-white'></div>
        <div className=' border-8  rounded-full border-primary'></div>
      </div>
    </div>
  );
};

export default shoppingbag;
