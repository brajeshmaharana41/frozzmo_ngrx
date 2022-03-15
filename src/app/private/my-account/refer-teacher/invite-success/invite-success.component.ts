import { Component, OnInit } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}
const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'SIGN UP'},
]
@Component({
  selector: 'app-invite-success',
  templateUrl: './invite-success.component.html',
  styleUrls: ['./invite-success.component.scss']
})
export class InviteSuccessComponent implements OnInit {

  btn_infos = ButtonInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
