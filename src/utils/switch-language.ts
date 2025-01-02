import i18n from '@/i18n/i18n';
import { languagesType } from '@/types/language';
import { initReactI18next } from 'react-i18next';

import {
  Roboto_Slab as RobotoSlab,
  Roboto_Flex as RobotoFlex,
} from 'next/font/google';

const robotoSlab = RobotoSlab({ subsets: ['latin'], weight: '400' });
const robotoFlex = RobotoFlex({
  subsets: ['latin'],
  weight: '400',
  preload: true,
});

export const switchLanguage = (language: languagesType['value']) => {
  i18n.use(initReactI18next).init({ lng: language });

  document.body.style.setProperty(
    'font-family',
    language == 'en'
      ? robotoFlex.style.fontFamily //English
      : robotoSlab.style.fontFamily, //Spanish
  );
};
