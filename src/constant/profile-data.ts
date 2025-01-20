interface Props {
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  phone?: string;
  city?: string;
  age?: number;
  password?: string;
}

export const profileData = ({
  firstName,
  lastName,
  email,
  address,
  phone,
  city,
  age,
  password,
}: Props) => [
  {
    name: 'firstName',
    type: 'text',
    placeholder: 'Name',
    label: 'First Name',
    value: firstName,
  },
  {
    name: 'lastName',
    type: 'text',
    placeholder: 'Name',
    label: 'Last Name',
    value: lastName,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email address',
    value: email,
  },
  {
    name: 'address',
    type: 'text,number',
    placeholder: 'Your address',
    label: 'Conform Address ',
    value: address,
  },
  {
    name: 'contact',
    type: 'text',
    placeholder: 'Your number',
    label: 'Contact Number',
    value: phone,
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'The city',
    label: 'City',
    value: city,
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'Your age ',
    label: 'Age',
    value: age,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    value: password,
  },
];
