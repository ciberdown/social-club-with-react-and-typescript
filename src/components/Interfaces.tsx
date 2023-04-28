export default interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}
export interface Company {
  name: string;
  chatchPhrase: string;
  bs: string;
}
export interface User {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website?: string;
  company?: Company;
}
