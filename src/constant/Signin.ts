import Password from '@/../public/icons/password.svg';
import Email from '@/../public/icons/email.svg';

export const SignInData = [
  {
    legend: 'Email',
    type: 'email',
    placeholder: 'Enter Email',
    icon: Email.src,
    label: 'email',
    name: 'email',
  },
  {
    legend: 'Password',
    type: 'password',
    placeholder: 'Create a password',
    icon: Password.src,
    label: 'password',
    name: 'password',
  },
];

export const CheckBoxData = [
  {
    text: 'Remember me',
  },
  {
    text: 'Agree with terms and conditions',
  },
];
