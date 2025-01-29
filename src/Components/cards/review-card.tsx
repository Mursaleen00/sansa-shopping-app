// src/Components/cards/review-card.tsx
'use strict';

// React imports
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

// Moment import
import moment from 'moment';

//  Image import
import Image from 'next/image';

// Use interface IReviewCard
interface IReviewCard {
  name: string;
  review: string;
  profileImage: string;
  date: string;
  rating: number;
}

const ReviewCard = ({
  date,
  rating,
  profileImage,
  name,
  review,
}: IReviewCard) => {
  return (
    <div className='border border-secondary-100 rounded-lg p-6 flex flex-col gap-y-6 max-w-[300px] sm:max-w-[400px]'>
      {/* image  */}
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
            Sansa&apos;s Customer .{' '}
            <span className='text-sm'>{moment(date).format('ll')}</span>
          </p>
        </div>
      </div>
      <p className='text-secondary-600'>{review}</p>
      {/* Rating  */}
      <div className='flex items-center gap-x-1'>
        <Rating
          style={{ maxWidth: 80 }}
          value={rating}
          items={5}
          readOnly
        />
        <p className='text-primary-500'>{rating} stars</p>
      </div>
    </div>
  );
};
export default ReviewCard;
