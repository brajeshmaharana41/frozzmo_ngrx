import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() ProductData : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
