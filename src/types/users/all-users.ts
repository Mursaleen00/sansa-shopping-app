// src/types/users/all-user.ts

// Export interface AllUsersType
export interface AllUsersType {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

// Export interface User
export interface User {
  id: number;
  image: string;
  firstName: string;
}
