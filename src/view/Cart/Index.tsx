'use client';
import EmptyCard from '@/../public/image/empty-card.svg';
import Button from '@/Components/buttons/button';
import PriceSection from '@/Components/shopping-bag-page/price-section';
import ShoppingBagCard from '@/Components/shopping-bag-page/shopping-bag-card';
import ShoppingBagPayment from '@/Components/shopping-bag-page/shopping-bag-payment';
import StepBar from '@/Components/shopping-bag-page/step-bar';
import Details from '@/Components/user-details/your-details';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const CartView = () => {
  const [step, setStep] = useState(0);

  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );

  const [quantities, setQuantities] = useState<number[]>(
    products?.map(() => {
      return 1;
    }) || [],
  );

  const totalPrice = products?.reduce(
    (acc, item, i) => acc + item.price * quantities?.[i],
    0,
  );

  const router = useRouter();

  const [price, setPrice] = useState<number>(totalPrice || 0);

  return (
    <div>
      {step !== 0 && (
        <button
          onClick={() => setStep(step >= 0 ? step : step - 1)}
          className='flex gap-2 items-center'
        >
          <FaArrowLeft /> Back
        </button>
      )}
      <StepBar step={step} />

      {products && products?.length > 0 ? (
        <div className='grid lg:grid-cols-2 gap-6 pt-6'>
          {step == 0 && (
            <ShoppingBagCard
              products={products || []}
              price={price}
              totalPrice={totalPrice || 0}
              setPrice={setPrice}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          )}

          {step == 1 && <Details />}

          {step == 2 && <ShoppingBagPayment />}

          <PriceSection
            setStep={() => setStep(step >= 2 ? step : step + 1)}
            totalItems={products?.length}
            quantities={quantities}
            products={products}
            price={price}
          />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
          <Image
            alt=''
            src={EmptyCard}
            width={195}
            height={203}
          />
          <div>
            <h3 className='text-secondary-700 text-2xl text-center'>
              No product in Bag
            </h3>
            <p className='text-secondary-500 text-center'>
              Ordered product will appear here
            </p>
          </div>

          <Button
            text='Go to shopping'
            className='w-full max-w-[400px]'
            onClick={() => router.push('/product')}
          />
        </div>
      )}
    </div>
  );
};

export default CartView;
