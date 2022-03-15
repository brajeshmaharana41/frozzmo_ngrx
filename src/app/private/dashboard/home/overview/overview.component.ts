import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

export interface overviewData {
  icon: string;
  title: string;
  price: string;
  iconcol: string;
}

const ViewData: overviewData[] = [
  { icon: 'cached', title: 'Wallet Balance', price: "100 FB", iconcol: 'view-btn'},
  { icon: 'arrow_upward', title: 'Amount Used', price: "10 FB",  iconcol: 'view-btns'},
  { icon: 'account_balance_wallet', title: 'Remaining in wallet', price: "90 FB",  iconcol: 'view-btn'},
  { icon: 'shopping_cart', title: 'Total Orders', price: "2",  iconcol: 'view-btn'},
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  views: string[] = ['image','title','subtitle','iconcol'];
  overViewinfos = ViewData;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
