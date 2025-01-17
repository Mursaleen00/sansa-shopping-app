import Details from '@/Components/user-details/your-details';
import React from 'react';

const AboutView = () => {
  return (
    <div>
      <div className='flex gap-1'>
        <div className='text-[#B3B7B1]'>Home</div>/<div>About us</div>
      </div>
      <Details />
    </div>
  );
};

export default AboutView;
