import { Component, OnInit } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'details-btn', btn_name: 'Update'},
]
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  btn_infos = ButtonInfo;

  showEdit: boolean = false ;

  showprslEmail: boolean = false ;

  showschoolEmail: boolean = false ;

  showPassword: boolean = false ;


  // isnotShow

  toggle_nameShow() {

    this.showEdit = ! this.showEdit;

  }

  toggle_prslShow() {

    this.showprslEmail = ! this.showprslEmail;

  }

  toggle_schollShow() {

    this.showschoolEmail = ! this.showschoolEmail;

  }

  toggle_passwordShow() {

    this.showPassword = ! this.showPassword;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
