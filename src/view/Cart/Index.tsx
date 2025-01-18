'use client';
import blackshirt from '@/../public/image/blackshirt.svg';
import PriceSection from '@/Components/shopping-bag-page/price-section';
import ShoppingBagCard from '@/Components/shopping-bag-page/shopping-bag-card';
import ShoppingBagPayment from '@/Components/shopping-bag-page/shopping-bag-payment';
import StepBar from '@/Components/shopping-bag-page/step-bar';
import Details from '@/Components/user-details/your-details';
import { FaArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';

const selectedCardItems = [
  {
    name: 'black shirt',
    price: 5,
    quantity: 1,
    image: blackshirt,
  },
  {
    name: 'White shirt',
    price: 10,
    quantity: 1,
    image: blackshirt,
  },
];

const CartView = () => {
  const [step, setStep] = useState(1);

  const totalPrice = selectedCardItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  const [price, setPrice] = useState<number>(totalPrice);

  return (
    <div className=''>
      {step !== 0 && (
        <button
          onClick={() => setStep(step <= 0 ? step : step - 1)}
          className='flex gap-2 items-center'
        >
          <FaArrowLeft /> Back
        </button>
      )}

      <StepBar step={step} />

      <div className='grid lg:grid-cols-2 gap-6 pt-6'>
        {step == 0 && (
          <ShoppingBagCard
            data={selectedCardItems}
            price={price}
            totalPrice={totalPrice}
            setPrice={setPrice}
          />
        )}

        {step == 1 && <Details />}

        {step == 2 && <ShoppingBagPayment />}

        <PriceSection
          price={price}
          setStep={() => setStep(step >= 2 ? step : step + 1)}
        />
      </div>
    </div>
  );
};

export default CartView;
