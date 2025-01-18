import { ShippingAddress, UserDetails } from '@/constant/user-details-data';
import Input from '../inputs/input';

const Details = () => {
  return (
    <div>
      {/* 1st section  */}
      <div className=' bg-gray rounded-xl px-5 py-4 gap-y-6'>
        {/* user details  */}
        <div className='grid p-4'>
          <h1 className=' text-2xl pb-3'>Enter your details</h1>
          <div className='grid sm:grid-cols-2 gap-3'>
            {UserDetails.map((item, index) => (
              <Input
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* Shipping Address   */}
        <div className='grid p-4'>
          <h1 className='text-2xl pb-3'>Shipping Address </h1>
          <div className='grid sm:grid-cols-2 gap-3 '>
            {ShippingAddress.map((item, index) => (
              <Input
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
