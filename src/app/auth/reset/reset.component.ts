import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'VERIFY'},
]
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  btn_infos = ButtonInfo;

  hide = true;
  
  password = new FormControl('', [Validators.required]);

  confirmpassword = new FormControl('', [Validators.required]);
  getcpasswordErrorMessage() {
    if (this.confirmpassword.hasError('required')) {
      return 'You must enter password';
    }

    return this.confirmpassword.hasError('confirmpassword') ? 'Not a valid email' : '';
  }
  getpasswordErrorMessage() {
    if (this.confirmpassword.hasError('required')) {
      return 'You must enter password';
    }

    return this.confirmpassword.hasError('confirmpassword') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
