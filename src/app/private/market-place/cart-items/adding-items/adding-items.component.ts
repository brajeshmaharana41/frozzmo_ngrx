import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cart_Item } from 'src/app/services/market_services/cart_module';
import * as fromActions from '../../../../store/add_item_to_cart/cart_actions';
import * as fromStore from '../../../../store/add_item_to_cart/cart_reducer';
import * as fromSelector from '../../../../store/add_item_to_cart/cart_selectors';
// export interface PeriodicElement {
//   item: string;
//   price: number;
//   quantity: string;
//   total: number;

// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {item: '../../../../../assets/product4.png', price: 150, quantity: 'School Bag Canvas with Art Kit', total: 1.0079},
//   {item: '../../../../../assets/product5.png', price: 12, quantity: 'PARKER Vector Gold Pen', total: 4.0026},
// ];


@Component({
  selector: 'app-adding-items',
  templateUrl: './adding-items.component.html',
  styleUrls: ['./adding-items.component.scss']
})
export class AddingItemsComponent implements OnInit {
  // dataSources = ELEMENT_DATA;
  cart_item$: Observable<cart_Item[]>;

  public counter: number = 1;
  constructor( private store: Store<fromStore.ShoppingCartState> ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.Load_Cart_Action());
    this.cart_item$ = this.store.select(fromSelector.selectCartCount$);
  }
  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }


}
