import Heart from '@/../public/icons/heart.svg';
import Profile from '@/../public/icons/profile.svg';
import Shop from '@/../public/icons/shop.svg';
import Search from '@/../public/icons/search.svg';
import { urls } from './urls';

export const icons = [
  { icon: Search.src, link: urls.search, width: 24, height: 24 },
  { icon: Heart.src, link: urls.favorite, width: 24, height: 24 },
  { icon: Shop.src, link: urls.cart, width: 24, height: 24 },
  { icon: Profile.src, link: urls.profile, width: 24, height: 24 },
];
