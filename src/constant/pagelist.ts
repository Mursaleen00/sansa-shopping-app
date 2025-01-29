// src/constant/pagelist.ts

//  urls Import
import { urls } from './urls-data';

//  type
type PageT = {
  text: string;
  link: string;
};

// Export pages
export const pages: PageT[] = [
  { text: 'Home', link: urls.home },
  { text: 'Product', link: urls.product },
  { text: 'About Us', link: urls.about },
  { text: 'Contact Us', link: urls.contact },
];

// Export authPages
export const authPages: PageT[] = [
  { text: 'Sign In', link: urls.signin },
  { text: 'Sign Up', link: urls.signup },
];
