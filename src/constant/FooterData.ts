import GooglePay from '@/../public/image/GooglePay.svg';
import Mastercard from '@/../public/image/Mastercard.svg';
import PayPal from '@/../public/image/PayPal.svg';
import ApplePay from '@/../public/image/ApplePay.svg';
import UnionPay from '@/../public/image/UnionPay.svg';
import visa from '@/../public/image/Visa.svg';
import facebook from '@/../public/icons/facebook.svg';
import instagram from '@/../public/icons/instagram.svg';
import twitter from '@/../public/icons/twitter.svg';
import linkedin from '@/../public/icons/linkedin.svg';

type list = {
  title: string;
  data: {
    text?: string;
    icon?: string;
  }[];
}[];
export const FooterData: list = [
  {
    title: 'Make money with us',
    data: [
      { text: 'Sell product on Sansa' },
      { text: 'Sell on Sansa Business' },
      { text: 'Self-Publish with Us' },
    ],
  },
  {
    title: 'Connects',
    data: [
      { text: 'facebook', icon: facebook.src },
      { text: 'Instagram', icon: instagram.src },
      { text: 'LinkedIn', icon: twitter.src },
      { text: 'X', icon: linkedin.src },
    ],
  },
  {
    title: 'Payment Method',
    data: [
      { icon: ApplePay.src },
      { icon: UnionPay.src },
      { icon: visa.src },
      { icon: GooglePay.src },
      { icon: Mastercard.src },
      { icon: PayPal.src },
    ],
  },
];
