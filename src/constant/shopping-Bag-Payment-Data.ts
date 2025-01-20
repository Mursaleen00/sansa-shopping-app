import ApplePay from '@/../public/image/ApplePay.svg';
import GooglePay from '@/../public/image/GooglePay.svg';
import Card from '@/../public/image/Id card.svg';
import Paypal from '@/../public/image/PayPal.svg';

export const cardData = [
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

export const ShoppingBagPaymentData = [
  {
    name: 'CardName',
    type: 'text',
    placeholder: 'Enter on Card Name',
    label: 'Name on Card',
  },
  {
    name: 'ExpiredDate',
    type: 'number',
    placeholder: 'Enter on Card name',
    label: 'Expired date',
  },
  {
    name: 'CardNumber',
    type: 'Number',
    placeholder: 'Enter Number',
    label: 'Card Number ',
  },
  {
    name: 'Cvv',
    type: 'text',
    placeholder: 'Enter CVV ',
    label: 'CVV',
  },
];
