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
    type: 'text',
    placeholder: 'Name',
    label: 'First Name',
    value: firstName,
  },
  {
    type: 'text',
    placeholder: 'Name',
    label: 'Last Name',
    value: lastName,
  },
  {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter you email address',
    value: email,
  },
  {
    type: 'text,number',
    placeholder: 'Your address',
    label: 'Conform Address ',
    value: address,
  },
  {
    type: 'text',
    placeholder: 'Your number',
    label: 'Contact Number',
    value: phone,
  },
  {
    type: 'text',
    placeholder: 'The city',
    label: 'City',
    value: city,
  },
  {
    type: 'number',
    placeholder: 'Your age ',
    label: 'Age',
    value: age,
  },
  {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    value: password,
  },
];
