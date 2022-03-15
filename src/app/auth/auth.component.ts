import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'SIGN UP'},
]
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  btn_infos = ButtonInfo;


  firstName = new FormControl('', [Validators.required]);

  lastName = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required]);

  confirmpassword = new FormControl('', [Validators.required]);

  referrial = new FormControl('', [Validators.required]);

  hideRequiredControl = new FormControl(false);
  
  inemail = new FormControl('', [Validators.required, Validators.email]);

  inpassword = new FormControl('', [Validators.required]);

  hide = true;
  getnameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'You must Enter First Name';
    }

    return this.firstName.hasError('firstName') ? 'Not a valid firstName' : '';
  }
  getlastnameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'You must Enter LastName';
    }

    return this.lastName.hasError('lastName') ? 'Not a valid email' : '';
  }

  getemailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must Enter Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getpasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must Enter password';
    }

    return this.password.hasError('password') ? 'Not a valid email' : '';
  }

  getcpasswordErrorMessage() {
    if (this.confirmpassword.hasError('required')) {
      return 'You must Enter Password';
    }

    return this.confirmpassword.hasError('confirmpassword') ? 'Not a valid email' : '';
  }

  getrefeErrorMessage() {
    if (this.referrial.hasError('required')) {
      return 'You must Enter Referrial';
    }

    return this.referrial.hasError('referrial') ? 'Not a valid email' : '';
  }

  getinemailErrorMessage() {
    if (this.inemail.hasError('required')) {
      return 'You must Enter Email';
    }

    return this.inemail.hasError('inemail') ? 'Not a valid email' : '';
  }

  getinpasswordErrorMessage() {
    if (this.inpassword.hasError('required')) {
      return 'You must Enter Password';
    }

    return this.inpassword.hasError('inpassword') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
