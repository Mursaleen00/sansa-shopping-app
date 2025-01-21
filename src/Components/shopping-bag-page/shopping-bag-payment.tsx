import {
  cardData,
  ShoppingBagPaymentData,
} from '@/constant/shopping-Bag-Payment-Data';
import { useFormik } from 'formik';
import Input from '../inputs/input';
import Radio from '../inputs/radio';
import Button from '../buttons/button';
import { SoppingBagPaymentSchema } from '@/schema/sopping-bag-payment-schema';

const initialValues = {
  CardName: '',
  ExpiredDate: '',
  CardNumber: '',
  Cvv: '',
};
const ShoppingBagPayment = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: SoppingBagPaymentSchema,
    onSubmit: () => {},
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <div className='flex flex-col md:flex-row gap-y-4 sm:gap-x-4 justify-around w-full '>
      {/* first section  */}
      <div className=' grid grid-col bg-gray border-2 gap-y- md:gap-y-0 lg:gap-y-2  p-2 sm:px-4 w-full border-gray rounded-xl h-fit '>
        <div className='grid  p-2 text-2xl '>Payment Method</div>
        <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-1'>
          {cardData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center gap-y-2'
            >
              <Radio
                label={item.name}
                image={item.icon}
              />
            </div>
          ))}
        </div>
        <div>
          <div className='grid gap-y-2 pt-5'>
            {ShoppingBagPaymentData.map((item, i) => (
              <div key={i}>
                <Input
                  {...item}
                  onChange={handleChange}
                  value={values[item.name as keyof typeof values]}
                  error={errors[item.name as keyof typeof errors]}
                  touched={touched[item.name as keyof typeof touched]}
                />
              </div>
            ))}
          </div>
          <Button
            text='Submit'
            onClick={handleSubmit}
          />
          <div className='flex flex-col sm:flex-row justify-end sm:gap-x-2 py-1'>
            <p>Where is Card number?</p>
            <p>Where is Expired date?</p>
            <p>Where is my CVV?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagPayment;
