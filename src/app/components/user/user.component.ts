import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postcode = new FormControl('');
  city = new FormControl('');

  user: User;

  constructor() { }

  ngOnInit(): void {
  }
  newUser() {
    // tslint:disable-next-line: max-line-length
    this.user = new User(this.username.value, this.email.value, this.password.value, this.street.value, this.postcode.value, this.city.value);
  }

}
