import { Component, OnInit } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'VERIFY'},
]
@Component({
  selector: 'app-school-verify',
  templateUrl: './school-verify.component.html',
  styleUrls: ['./school-verify.component.scss']
})
export class SchoolVerifyComponent implements OnInit {
  btn_infos = ButtonInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
