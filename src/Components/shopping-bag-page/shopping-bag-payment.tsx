import ApplePay from '@/../public/image/ApplePay.svg';
import GooglePay from '@/../public/image/GooglePay.svg';
import Card from '@/../public/image/Id card.svg';
import Paypal from '@/../public/image/PayPal.svg';
import { ShoppingBagPaymentData } from '@/constant/shopping-Bag-Payment-Data';
import Input from '../inputs/input';
import Radio from '../inputs/radio';

const cardData = [
  {
    name: 'Card',
    icon: Card,
  },
  {
    name: 'Paypal',
    icon: Paypal,
  },
  {
    name: 'Google Pay',
    icon: GooglePay,
  },
  {
    name: 'Apple Pay',
    icon: ApplePay,
  },
];

const ShoppingBagPayment = () => {
  return (
    <div className='flex flex-col md:flex-row gap-y-4 sm:gap-x-4 justify-around w-full '>
      {/* first section  */}
      <div className=' grid grid-col bg-gray border-2 gap-y-2 md:gap-y-0 lg:gap-y-2  p-2 sm:px-4 w-full border-gray rounded-xl md:h-[400px] xl:h-[350px] '>
        <div className='grid font-bold p-2 text-2xl '>Payment Method</div>
        <div className='grid grid-cols sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-1'>
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
          {ShoppingBagPaymentData.map((item, i) => (
            <div key={i}>
              <Input {...item} />
            </div>
          ))}

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
