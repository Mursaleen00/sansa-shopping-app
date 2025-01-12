import Password from '@/../public/icons/password.svg';
import Email from '@/../public/icons/email.svg';

export const SignInData = [
  {
    legend: 'username',
    type: 'username',
    placeholder: 'Enter username',
    icon: Email.src,
    label: 'username',
    name: 'username',
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
