// src/schema/details-schema.ts

//  yup Import
import * as yup from 'yup';

// --------------------------------UserDetails Schema ---------------------------
const UserDetailsSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  contact: yup
    .string()
    .matches(/^\d{11}$/, 'Contact number must be exactly 11 digits')
    .required('Contact Number is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City Name is required'),
  state: yup.string().required('state Name is required'),
  country: yup.string().required('country Name is required'),
  zipCode: yup.string().required('Zip code Name is required'),
  prefix: yup.string().required('prefix is required'),
});

// --------------------------SoppingBagPaymentSchema--------------------------
const SoppingBagPaymentSchema = yup.object().shape({
  cardName: yup.string().required('Card Name is required'),
  expiredDate: yup.string().required('Expired Name is required'),
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, 'Card Number must be exactly 16 digits')
    .required('Card Number is required'),
  cvv: yup
    .string()
    .matches(/^\d{3}$/, 'CVV must be exactly 3 digits')
    .required('Cvv is required'),
});

// Export personalDetailSchema
export const personalDetailSchema = yup.object().shape({
  personalDetails: UserDetailsSchema,
});

// Export bankDetailSchema
export const bankDetailSchema = yup.object().shape({
  bankDetails: SoppingBagPaymentSchema,
});
