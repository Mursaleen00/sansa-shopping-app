// src/Components/shopping-bag-page/shopping-bag-card.tsx
'use client';

// Store Import
import { ProductState } from '@/store/Slice/product-slice';

// Button Import
import Button from '../buttons/button';

// Card Import
import AddToCard from '../cards/add-to-card';

// React Import
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../inputs/input';

// Use interface Props
interface Props {
  products: ProductState[];
  totalPrice: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  price: number;
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
}

const ShoppingBagCard = ({
  price,
  totalPrice,
  setPrice,
  products,
  quantities,
  setQuantities,
}: Props) => {
  // State
  const [code, setCode] = useState<number>(0);

  const [applied, setApplied] = useState<boolean>(false);

  // Translation
  const { t } = useTranslation();

  // handleApplyCode
  const handleApplyCode = () => {
    if (code === 12345) {
      setPrice(price - price * 0.1);
      setApplied(true);
    } else setPrice(totalPrice);
  };

  return (
    <div>
      <div className='grid grid-row bg-gray w-full  h-fit rounded-2xl py-6 gap-y-5'>
        {/* image */}
        <div className='flex flex-col gap-y-5 w-full max-h-[45dvh] overflow-y-auto'>
          {products.map((item, i) => (
            <AddToCard
              key={i}
              {...item}
              index={i}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          ))}
        </div>

        {/* border */}
        <div className='flex border border-[#dddddc] items-center mx-7'></div>

        {/* Input */}
        <div className='grid px-6 gap-y-3'>
          <Input
            label='Promotion Code'
            placeholder='Enter promotion code to get discount'
            type='number'
            className='w-full'
            onChange={e => setCode(Number(e.target.value))}
          />
          {/* Button  */}
          <Button
            text='Apply'
            onClick={handleApplyCode}
            disabled={applied || code === 0}
          />
          <p>{t('Your promotion code to get a 10% discount is:')} 12345</p>
        </div>
      </div>
    </div>
  );
};
export default ShoppingBagCard;
