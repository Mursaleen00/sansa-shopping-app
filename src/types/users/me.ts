// src/types/users/me.ts

// Export interface MeTypes
export interface MeTypes {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

// Export interface Hair
export interface Hair {
  color: string;
  type: string;
}

// Export interface Address
export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

// Export interface Coordinates
export interface Coordinates {
  lat: number;
  lng: number;
}

// Export interface Bank
export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

// Export interface Company
export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address2;
}

// Export interface Address2
export interface Address2 {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates2;
  country: string;
}

// Export interface Coordinates2
export interface Coordinates2 {
  lat: number;
  lng: number;
}

// Export interface Crypto
export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}
