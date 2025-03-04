// src/Components/cards/order-card.tsx

// React imports
import Image from 'next/image';
import React from 'react';

// Use interface IOrderCard
interface IOrderCard {
  title: string;
  description: string;
  image: string;
}

const OrderCard = ({ description, image, title }: IOrderCard) => {
  return (
    <div className='border text-center rounded-lg border-secondary p-6 flex flex-col gap-y-3'>
      {/* image  */}
      <Image
        src={image}
        alt=''
        width={500}
        height={500}
      />
      {/* Tittle  */}
      <h3 className='text-secondary-700 font-medium md:text-3xl text-2xl'>
        {title}
      </h3>
      {/* description */}
      <p className='text-secondary-500'>{description}</p>
    </div>
  );
};

export default OrderCard;
