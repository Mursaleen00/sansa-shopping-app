export interface AllUsersType {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  image: string;
  firstName: string;
}
