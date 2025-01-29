// src/Components/cards/product-card.tsx

'use client';
// Constant import
import { urls } from '@/constant/urls-data';

//  Store imports
import {
  addToLikeProduct,
  removeToLikeProduct,
} from '@/store/Slice/like-product-slice';
import { addProduct, removeProduct } from '@/store/Slice/product-slice';
import { RootState } from '@/store/store';

// React imports & Next imports
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { GoHeart } from 'react-icons/go';
import { IoMdHeart } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';

// use interface ProductCardProps
interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discount?: number;
  className?: string;
  id: number;
}

const ProductCard = ({
  title,
  description,
  thumbnail,
  price,
  discount,
  className,
  id,
}: ProductCardProps) => {
  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );
  // Like Product
  const likedProducts = useSelector(
    (state: RootState) => state.likedProductSlice.product,
  );
  const isProductLiked = likedProducts?.some(product => product.id === id);

  //  dispatch
  const dispatch = useDispatch();

  // is added
  const isAdded = products?.some(product => product.id === id);

  // handle Add Product
  const handleAddProduct = () => {
    if (!isAdded) {
      dispatch(
        addProduct({ id, title, description, thumbnail, price, quantity: 1 }),
      );
    } else {
      dispatch(removeProduct(id));
    }
  };

  //  handle Like Product
  const handleLikeProduct = () => {
    if (!isProductLiked) {
      dispatch(addToLikeProduct({ id, title, description, thumbnail, price }));
    } else {
      dispatch(removeToLikeProduct(id));
    }
  };

  // discount price
  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number,
  ) => {
    const discount = discountPercentage;
    const discountAmount = (price * discount) / 100;
    return Math.round(price - discountAmount);
  };

  return (
    <div
      className={`relative border border-border rounded-lg ${className} p-6 w-full bg-white`}
    >
      <div className='flex justify-between items-center gap-x-6'>
        {discount && (
          <p className='bg-primary py-2.5 px-4 rounded-full text-white'>
            {Math.round(discount)}% Off
          </p>
        )}

        <button
          onClick={handleLikeProduct}
          className='bg-white rounded-full !z-30'
        >
          {isProductLiked ? (
            <IoMdHeart
              size={24}
              className='absolute text-error top-4 right-4 cursor-pointer z-40'
            />
          ) : (
            <GoHeart
              className='absolute top-4 right-4 cursor-pointer z-40'
              size={24}
            />
          )}
        </button>
      </div>
      <Link
        href={urls.productDetails(id)}
        className='bg-white'
      >
        <Image
          src={thumbnail || ''}
          alt='t-shirt'
          width={800}
          height={800}
          className='z-10 py-4 !mix-blend-multiply bg-white'
        />
      </Link>
      <h1
        className='text-secondary-700 text-2xl pb-1 line-clamp-1'
        title={title}
      >
        {title}
      </h1>

      <p
        className='text-secondary-500 line-clamp-2'
        title={description}
      >
        {description}
      </p>
      <div className='flex justify-between items-center gap-x-6 pt-2'>
        <p className='text-secondary-700 text-lg font-medium'>
          {discount
            ? calculateDiscountedPrice(price, discount)
            : Math.round(price)}{' '}
          USD{' '}
          {discount && calculateDiscountedPrice(price, discount) && (
            <s className='text-secondary-300  text-base font-normal'>
              {Math.round(price)} USD
            </s>
          )}
        </p>
        <button
          className='bg-primary size-8 rounded-full flex justify-center items-center'
          onClick={handleAddProduct}
        >
          {isAdded ? (
            <RxCross2
              size={19}
              className='text-white'
            />
          ) : (
            <FiPlus
              size={19}
              className='text-white'
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
