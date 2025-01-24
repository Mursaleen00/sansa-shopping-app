import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Button from '../../Components/buttons/button';
// import { ProductState } from '@/store/Slice/product-slice';

// interface SingleProductProps {
//   setStep: () => void;
//   title?: string;
//   description?: string;
//   thumbnail: string;
//   price?: number;
//   quantities?: number;
//   products?: ProductState[];
// }

// ({
//   // setStep,
//   title,
//   thumbnail,
//   description,
//   price,
//   // products,
//   quantities,
// }: SingleProductProps) =>
const SingleProductDetails = () => {
  return (
    <div className='grid border border-gray  items-center rounded-2xl gap-y-5 md:gap-y-3 p-6'>
      <h1 className='font-bold text-2xl'>
        {/* {(data.images.(item.title)=>{})} */}
        {/* dat?.images.(item.title)) */}
        Shirt mockup concept with
        <br /> plain clothing
      </h1>
      <p className='flex text-md'>
        This shirt is made in Thailand in a company called ANM
      </p>
      {/* star */}
      <div className='flex items-center gap-x-1'>
        <Rating
          style={{ maxWidth: 80 }}
          value={5}
          items={9}
          readOnly
        />
        <p className='text-sm text-black '>({5} stars) </p>
      </div>

      {/* {products?.map((item ,i )=> {
         <div className='text-2xl font-bold'>9.10 USD</div>
         <div className='flex gap-2 items-center'>
           Quantity :
           <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
             -
           </button>
           
           <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
             +
           </button>
         </div>
      })} */}
      {/* <div className='text-2xl font-bold'>{price} 9.10 USD</div> */}
      <div className='text-2xl font-bold'>9.10 USD</div>
      <div className='flex gap-2 items-center'>
        Quantity :
        <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
          -
        </button>
        <button className='flex border-2 size-5 rounded-full items-center justify-center bg-gray'>
          +
        </button>
      </div>
      {/* button */}
      <div className='grid grid-cols-2 gap-5 px-9'>
        <Button
          className=' w-full '
          text='Add to card'
        />
        <Button
          className='w-full'
          text='Add to favorite'
          isOutline
        />
      </div>
    </div>
  );
};

export default SingleProductDetails;
