import Profile from '@/../public/icons/profile.svg';
import ExpiredDate from '@/../public/icons/Expired date.svg';
import Star from '@/../public/icons/3 Star.svg';
import IdCard from '@/../public/icons/Id card.svg';
import GooglePay from '@/../public/image/GooglePay.svg';
import PayPal from '@/../public/image/PayPal.svg';
import ApplePay from '@/../public/image/ApplePay.svg';

export const chooseCard = [
  {
    icon: IdCard.src,
    placeholder: 'card',
    button: '',
  },
  {
    icon: PayPal.src,
    placeholder: 'Paypal',
    button: '',
  },
  {
    icon: GooglePay.src,
    placeholder: 'G pay',
    button: '',
  },
  {
    icon: ApplePay.src,
    placeholder: 'A Pay',
    button: '',
  },
];

export const ShoppingBagPaymentData = [
  {
    legend: 'Name on Card',
    type: 'text',
    placeholder: ' Card Name',
    icon: Profile.src,
    label: '',
  },
  {
    legend: 'Name on Card',
    type: 'text',
    placeholder: 'card name',
    icon: ExpiredDate.src,
    label: '',
  },
  {
    legend: 'Card Number ',
    type: 'text',
    placeholder: 'Number',
    icon: IdCard.src,
    label: '',
  },
  {
    legend: 'CVV',
    type: 'text',
    placeholder: 'Enter CVV ',
    icon: Star.src,
    label: '',
  },
];
