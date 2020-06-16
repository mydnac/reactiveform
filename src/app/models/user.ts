export class User {
  username: string;
  email: string;
  password: string;
  street: string;
  postcode: number;
  city: string;

  constructor(username: string, email: string, password: string, street: string, postcode: number, city: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.street = street;
    this.postcode = postcode;
    this.city = city;
  }

}

