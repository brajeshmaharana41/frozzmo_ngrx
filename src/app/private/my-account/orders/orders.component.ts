import { Component, OnInit } from '@angular/core';
export interface YourOrdercard {
  image: string;
  title: string;
  date: string;
  total: number;
  item: string;
  track: string;
  details: string;
}

const YourOrder: YourOrdercard[] = [
  { image: '../../../../assets/product1.png', title: 'Order ID - FR00021', date: 'May 12, 2021', total: 10.0, item: '2 Items', track: 'Track My Order', details: 'View Details'},
  { image: '../../../../assets/product7.png', title: 'Order ID - FR00021', date: 'June 12, 2021', total: 29.0, item: '1 Items', track: 'Track My Order', details: 'View Details'},
]
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  yourOrderDetails = YourOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
