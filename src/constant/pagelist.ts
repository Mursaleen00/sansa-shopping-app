import { urls } from './urls';

type PageT = {
  text: string;
  link: string;
};

export const pages: PageT[] = [
  { text: 'Home', link: urls.home },
  { text: 'Product', link: urls.product },
  { text: 'About Us', link: urls.about },
  { text: 'Contact Us', link: urls.contact },
];
