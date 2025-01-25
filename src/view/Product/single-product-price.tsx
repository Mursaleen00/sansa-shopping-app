'use client';
import { urls } from '@/constant/urls';
import {
  addToLikeProduct,
  removeToLikeProduct,
} from '@/store/Slice/like-product-slice';
import { addProduct, updateProduct } from '@/store/Slice/product-slice';
import { RootState } from '@/store/store';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/buttons/button';

interface SingleProductProps {
  title: string;
  description: string;
  price: number;
  ratings: number;
  totalReviews: number;
  thumbnail: string;
  id: number;
}

const SingleProductDetails: FC<SingleProductProps> = ({
  description,
  price,
  ratings,
  title,
  totalReviews,
  thumbnail,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);

  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );

  const router = useRouter();

  const likedProducts = useSelector(
    (state: RootState) => state.likedProductSlice.product,
  );

  const dispatch = useDispatch();

  const isAdded = products?.find(product => product.id === id);

  const isProductLiked = likedProducts?.find(product => product.id === id);

  const handleAddProduct = () => {
    if (isAdded) router.push(urls.cart);
    else {
      dispatch(
        addProduct({
          id,
          title,
          description,
          thumbnail,
          price,
          quantities: quantity,
        }),
      );
    }
  };

  const handleLikeProduct = () => {
    if (!isProductLiked) {
      dispatch(addToLikeProduct({ id, title, description, thumbnail, price }));
    } else dispatch(removeToLikeProduct(id));
  };

  const handleChangeQuantity = (operator: 'add' | 'remove') => {
    const updateQuant = (quantity: number) =>
      dispatch(
        updateProduct({
          id,
          title,
          description,
          thumbnail,
          price,
          quantities: quantity,
        }),
      );

    if (operator === 'add' && quantity < 5) {
      setQuantity(quantity < 5 ? quantity + 1 : quantity);
      updateQuant(quantity + 1);
    } else if (operator === 'remove' && quantity > 1) {
      setQuantity(quantity > 1 ? quantity - 1 : quantity);
      updateQuant(quantity - 1);
    }
  };

  useEffect(() => {
    if (isAdded) setQuantity(isAdded.quantities || 1);
  }, []);

  return (
    <div className='grid border border-gray  items-center rounded-2xl gap-y-5 md:gap-y-3 p-6'>
      <h1 className='font-bold text-2xl'>
        {/* {(data.images.(item.title)=>{})} */}
        {/* dat?.images.(item.title)) */}
        {title}
      </h1>
      <p className='flex text-md'>{description}</p>
      {/* star */}
      <div className='flex items-center gap-x-1'>
        <Rating
          style={{ maxWidth: 80 }}
          value={ratings}
          items={5}
          readOnly
        />
        <p className='text-sm text-black '>
          ({ratings.toFixed(1)}) ({totalReviews}) reviews
        </p>
      </div>

      <div className='text-2xl font-bold'> {price} USD</div>
      <div className='flex gap-2 items-center'>
        Quantity :
        <button
          className='flex size-5 rounded-full items-center justify-center bg-gray'
          onClick={() => handleChangeQuantity('remove')}
        >
          -
        </button>
        {quantity || 1} / 5
        <button
          className='flex size-5 rounded-full items-center justify-center bg-gray'
          onClick={() => handleChangeQuantity('add')}
        >
          +
        </button>
      </div>

      {/* button */}
      <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2  gap-5 px-9'>
        <Button
          className='w-full'
          text={!isAdded ? 'Add to card' : 'Go to card'}
          onClick={handleAddProduct}
        />
        <Button
          className='w-full'
          text={isProductLiked ? 'Remove from favorite' : 'Add to favorite'}
          isOutline
          onClick={handleLikeProduct}
        />
      </div>
    </div>
  );
};
export default SingleProductDetails;
