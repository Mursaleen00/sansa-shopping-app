import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import Input from '../inputs/input';

const Details = () => {
  return (
    <div>
      {/* 1st section  */}
      <div className=' bg-gray rounded-xl px-5 py-4 gap-y-6'>
        {/* user details  */}
        <h1 className=' py-2 text-xl'>Enter your details</h1>
        <div className='grid sm:grid-cols-2 gap-x-4 '>
          {UserDetails.map((item, index) => (
            <Input
              key={index}
              {...item}
            />
          ))}
        </div>

        {/* Shipping Address   */}
        <h1 className='  py-6 text-xl'>Shipping Address </h1>
        <div className='grid sm:grid-cols-2 gap-x-4 '>
          {ShippingAddress.map((item, index) => (
            <Input
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
