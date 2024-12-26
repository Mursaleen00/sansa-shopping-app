import product from '@/../public/image/product.png';
import location from '@/../public/image/location.png';
import pickUp from '@/../public/image/pick up.png';

export const orderCardData = [
  {
    title: 'Select Product',
    description:
      'Choosing product you want to purchase and pay with payment method such as credit card or google pays',
    image: product.src,
  },
  {
    title: 'Location',
    description:
      'Please choose a location near your residence where you can pick up product easily and inquire about the product in more detail.',
    image: location.src,
  },
  {
    title: 'Pick Up',
    description:
      'Once the product has arrived at the location you selected, you can proceed to pick it up.',
    image: pickUp.src,
  },
];
