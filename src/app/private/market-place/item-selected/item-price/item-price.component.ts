import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/services/market_services/market_modal';
import * as fromCartActions from '../../../../store/add_item_to_cart/cart_actions';
import * as fromStore from '../../../../store/product_store/reducer';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  styleUrls: ['./item-price.component.scss']
})
export class ItemPriceComponent implements OnInit {

  @Input() price_data : Product;

  constructor(    private store: Store<fromStore.ProductState>) { }

  ngOnInit(): void {
  }

}
