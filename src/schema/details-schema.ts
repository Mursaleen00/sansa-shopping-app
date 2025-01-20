import * as yup from 'yup';

export const UserDetailsSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  contact: yup
    .number()
    .min(11111111111, 'Must be 11 number')
    .max(11111111111, 'Must be 11 number')
    .required('Contact Number is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  Address: yup.string().required('Address is required'),
  City: yup.string().required('City Name is required'),
  state: yup.string().required('state Name is required'),
  country: yup.string().required('country Name is required'),
  ZipCode: yup.string().required('Zip code Name is required'),
  prefix: yup.string().required('prefix is required'),
});
