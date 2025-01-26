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

export const authPages: PageT[] = [
  { text: 'Sign In', link: urls.signin },
  { text: 'Sign Up', link: urls.signup },
];
