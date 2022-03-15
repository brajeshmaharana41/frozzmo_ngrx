import { Component, OnInit } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'SUBMIT'},
]
@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {
  btn_infos = ButtonInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
