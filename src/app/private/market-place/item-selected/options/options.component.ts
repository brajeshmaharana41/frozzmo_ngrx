import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Input() option_data : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
