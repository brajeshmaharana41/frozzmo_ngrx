import { Component, OnInit } from '@angular/core';

export interface InviteInfo {
  label: string;
  title: string;
  subtitle: string;
  btnclor: string;
  btn: string;
}

const colleagueInfo: InviteInfo[] = [
  { label: 'AD', title: 'Andre Doumad', btnclor: 'refer-btn',  subtitle: 'Invited', btn: 'Pending'},
  { label: 'AK', title: 'Andre Korchagin', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again'},
  { label: 'FB', title: 'Frac Brodai', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again'},
  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: ''},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: ''},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: ''},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: ''},
];
@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.scss']
})
export class ColleaguesComponent implements OnInit {
  
  Referedinfos = colleagueInfo;

  constructor() { }

  ngOnInit(): void {
  }
}
