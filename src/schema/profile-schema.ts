import * as yup from 'yup';

export const ProfileSchema = yup.object().shape({
  firstName: yup.string().required('required is firstName'),
  lastName: yup.string().required('required is lastName'),
  email: yup.string().required('required is email address'),
  address: yup.string().required('required is your address'),
  contact: yup.string().required('required is contact'),
  city: yup.string().required('required is city'),
  age: yup.number().required('required is age'),
  password: yup.string().required('required is firstName'),
});