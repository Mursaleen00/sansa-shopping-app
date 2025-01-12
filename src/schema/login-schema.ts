import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup.string().required('Email is required'),
  // password: yup.string().required('Password is required'),
  password: yup
    .string()
    // .min(8, 'Password must be at least 8 characters')
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(
    //   /[@$!%*?&#]/,
    //   'Password must contain at least one special character',
    // )
    .required('Password is required'),
});
