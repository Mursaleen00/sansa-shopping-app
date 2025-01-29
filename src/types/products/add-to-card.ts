// src/types/products/add-to-card.ts

// Formik Import
import { FormikProps } from 'formik';

//----------------------- Export Type AddToCardOnboardingT ---------------------
export type AddToCardOnboardingT = {
  personalDetails: PersonalDetailsT;
  bankDetails: PaymentDetails;
};

// -------------export type PersonalDetailsT---------------
export type PersonalDetailsT = {
  email: string;
  contact: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  prefix: string;
};
// ----------------------------- Export Type PaymentDetails-------------------
export type PaymentDetails = {
  cardName: string;
  expiredDate: string;
  cardNumber: string;
  cvv: string;
  selectedCard: 'card' | 'paypal' | 'googlePay' | 'ApplePay' | '';
};

export type AddToCardOnboardingType = FormikProps<AddToCardOnboardingT>;
