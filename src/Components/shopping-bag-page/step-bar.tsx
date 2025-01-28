// src/Components/shopping-bag-page/step-bar.tsx

// React Import
import React from 'react';

// Translation Import
import { useTranslation } from 'react-i18next';

// Use interface Props
interface Props {
  step: number;
}

// --------------------- StepBar -------------------------
const StepBar = ({ step }: Props) => {
  // Translation
  const { t } = useTranslation();

  //  Steps
  const steps = ['Card', 'Shipping', 'Payment'];

  return (
    <div>
      {/* Heading */}
      <h1 className='text-2xl font-bold py-6'>{t('Shopping bag')}</h1>
      <div className='relative flex justify-around items-center w-full'>
        <div className='border border-[#44483D] w-full absolute -z-10 top-2' />
        {/* steps view */}
        {steps.map((item, i) => (
          <div
            className='flex flex-col items-center'
            key={i}
          >
            <div
              className={`size-5 border rounded-full ${step >= i ? 'bg-primary' : 'bg-white'}`}
            />
            <p>{t(item)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBar;
