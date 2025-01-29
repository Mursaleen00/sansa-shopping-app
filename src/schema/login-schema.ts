// src/schema/login-schema.ts

// Yup Import
import * as yup from 'yup';

// Export Login Schema
export const LoginSchema = yup.object().shape({
  username: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});
