// src/view/Cart/Index.tsx
'use client';

// Components Imports
import NoProduct from '@/Components/common/no-product';
import PriceSection from '@/Components/shopping-bag-page/price-section';
import ShoppingBagCard from '@/Components/shopping-bag-page/shopping-bag-card';
import ShoppingBagPayment from '@/Components/shopping-bag-page/shopping-bag-payment';
import StepBar from '@/Components/shopping-bag-page/step-bar';
import Details from '@/Components/user-details/your-details';

// Constant Import
import { urls } from '@/constant/urls-data';

// Schema Imports
import {
  bankDetailSchema,
  personalDetailSchema,
} from '@/schema/details-schema';

// Store Imports
import { removeAllProducts } from '@/store/Slice/product-slice';
import { RootState } from '@/store/store';

//  types Import
import { AddToCardOnboardingT } from '@/types/products/add-to-card';

// Formik Import
import { useFormik } from 'formik';

// Next Import & React Imports
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

// initialValues
const initialValues: AddToCardOnboardingT = {
  // ------------------personalDetails--------------
  personalDetails: {
    email: '',
    contact: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    prefix: '',
  },
  //  -------------------bankDetails-------------------
  bankDetails: {
    cardName: '',
    expiredDate: '',
    cardNumber: '',
    cvv: '',
    selectedCard: '',
  },
};

const CartView = () => {
  // State
  const [step, setStep] = useState(0);

  // products
  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );

  // Quantities State
  const [quantities, setQuantities] = useState<number[]>(
    products?.map(item => {
      return item.quantities || 1;
    }) || [],
  );

  // Translation
  const { t } = useTranslation();

  // reduce
  const totalPrice = products?.reduce(
    (acc, item, i) => acc + item.price * quantities?.[i],
    0,
  );

  // router
  const router = useRouter();
  //  State
  const [price, setPrice] = useState<number>(totalPrice || 0);

  useEffect(() => setPrice(totalPrice || 0), [totalPrice]);

  // dispatch
  const dispatch = useDispatch();

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema:
      step == 1 ? personalDetailSchema : step == 2 ? bankDetailSchema : null,
    onSubmit: () => {
      toast.success('Order placed successfully');
      router.push(urls.home);
      dispatch(removeAllProducts());
    },
  });

  const { handleSubmit, validateForm } = formik;

  // handleNext
  const handleNext = async () => {
    const isValid = await validateForm();

    if (Object.values(isValid).length === 0) {
      if (step != 2) setStep(step >= 2 ? step : step + 1);
      else handleSubmit();
    } else toast.error('Please fill all the fields');
  };

  return (
    <div>
      {/* Button  */}
      {step !== 0 && (
        <button
          onClick={() => setStep(step >= 0 ? step : step - 1)}
          className='flex gap-2 items-center'
        >
          <FaArrowLeft /> {t('Back')}
        </button>
      )}
      {/* step Bar  */}
      <StepBar step={step} />

      {products && products?.length > 0 ? (
        <div className='grid lg:grid-cols-2 gap-6 pt-6'>
          {/* ShoppingBagCard */}
          {step == 0 && (
            <ShoppingBagCard
              products={products || []}
              totalPrice={totalPrice || 0}
              setPrice={setPrice}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          )}

          {/* Details View */}
          {step == 1 && <Details formik={formik} />}

          {/* Shopping Cart View */}
          {step == 2 && <ShoppingBagPayment formik={formik} />}

          {/* PriceSection */}
          <PriceSection
            setStep={handleNext}
            totalItems={products?.length}
            quantities={quantities}
            products={products}
            price={price}
            step={step}
          />
        </div>
      ) : (
        // NoProduct
        <NoProduct
          title='No product in Bag'
          description='Ordered product will appear here'
        />
      )}
    </div>
  );
};

export default CartView;
