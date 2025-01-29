// src/constant/shopping-Bag-Payment-Data.ts

// Images Imports
import ApplePay from '@/../public/image/ApplePay.svg';
import GooglePay from '@/../public/image/GooglePay.svg';
import Card from '@/../public/image/Id card.svg';
import Paypal from '@/../public/image/PayPal.svg';

// Export cardData
export const cardData = [
  {
    name: 'Card',
    icon: Card,
    value: 'card',
  },
  {
    name: 'Paypal',
    icon: Paypal,
    value: 'paypal',
  },
  {
    name: 'Google Pay',
    icon: GooglePay,
    value: 'googlePay',
  },
  {
    name: 'Apple Pay',
    icon: ApplePay,
    value: 'ApplePay',
  },
];

// Export ShoppingBagPaymentData
export const ShoppingBagPaymentData = [
  {
    name: 'cardName',
    type: 'text',
    placeholder: 'Enter on Card Name',
    label: 'Name on Card',
  },
  {
    name: 'expiredDate',
    type: 'number',
    placeholder: 'Enter on Card name',
    label: 'Expired date',
  },
  {
    name: 'cardNumber',
    type: 'Number',
    placeholder: 'Enter Number',
    label: 'Card Number',
  },
  {
    name: 'cvv',
    type: 'text',
    placeholder: 'Enter CVV ',
    label: 'CVV',
  },
];
