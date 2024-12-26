import Image from 'next/image';
import React from 'react';
import moment from 'moment';

interface IReviewCard {
  name: string;
  review: string;
  profileImage: string;
  date: string;
}

const ReviewCard = ({ date, profileImage, name, review }: IReviewCard) => {
  return (
    <div className='border border-secondary-100 rounded-lg p-6 flex flex-col gap-y-6'>
      <div className='flex items-center gap-x-3'>
        <Image
          alt=''
          src={profileImage}
          width={75}
          height={75}
          className='rounded-full object-cover'
        />

        <div className='flex flex-col'>
          <h2 className='text-secondary-700 text-xl'>{name}</h2>
          <p className='text-secondary-500'>
            Sansa’s Customer .{' '}
            <span className='text-sm'>{moment(date).format('ll')}</span>
          </p>
        </div>
      </div>
      <p className='text-secondary-600'>{review}</p>
    </div>
  );
};

export default ReviewCard;
