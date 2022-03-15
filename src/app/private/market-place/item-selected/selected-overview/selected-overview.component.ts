import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';

@Component({
  selector: 'app-selected-overview',
  templateUrl: './selected-overview.component.html',
  styleUrls: ['./selected-overview.component.scss']
})
export class SelectedOverviewComponent implements OnInit {

  @Input() review_Data : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
