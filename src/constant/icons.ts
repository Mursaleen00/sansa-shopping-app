import Heart from '@/../public/icons/heart.svg';
import Profile from '@/../public/icons/profile.svg';
import Shop from '@/../public/icons/shop.svg';
import { urls } from './urls';

type PageT = {
  link: string;
  icon: string;
  width: number;
  height: number;
};

export const icons: PageT[] = [
  { icon: Heart.src, link: urls.favorite, width: 24, height: 24 },
  { icon: Shop.src, link: urls.cart, width: 24, height: 24 },
  { icon: Profile.src, link: urls.profile, width: 24, height: 24 },
];
