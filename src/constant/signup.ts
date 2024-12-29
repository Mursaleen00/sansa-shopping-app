import Email from '@/../public/icons/email.svg';
import Name from '@/../public/icons/name.svg';
import Password from '@/../public/icons/password.svg';

export const SignUpData = [
  {
    legend: 'Email',
    type: 'email',
    placeholder: 'Enter Email',
    icon: Email.src,
    label: 'email',
    name: 'email',
  },
  {
    legend: 'Name',
    type: 'text',
    placeholder: 'Enter Your Name',
    icon: Name.src,
    label: 'name',
    name: 'name',
  },
  {
    legend: 'Password',
    type: 'password',
    placeholder: 'Create a password',
    icon: Password.src,
    label: 'password',
    name: 'password',
  },
  {
    legend: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm Password',
    icon: Password.src,
    label: 'confirm-password',
    name: 'confirmPassword',
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
