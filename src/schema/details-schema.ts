import * as yup from 'yup';

export const DetailsSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  contact: yup
    .number()
    .min(11111111111, 'Must be 11 number')
    .max(11111111111, 'Must be 11 number')
    .required('Contact Number is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
});
