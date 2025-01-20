import * as yup from 'yup';

export const SoppingBagPaymentSchema = yup.object().shape({
  CardName: yup.string().required('Card Name is required'),
  ExpiredDate: yup.string().required('Expired Name is required'),
  CardNumber: yup.string().required('Card Number is required'),
  Cvv: yup.string().required('Cvv is required'),
});
