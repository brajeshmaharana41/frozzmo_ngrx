import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { cart_Item, Delete_Item } from 'src/app/services/market_services/cart_module';
import * as fromCartActions from '../../store/add_item_to_cart/cart_actions';
import * as fromStore from '../../store/add_item_to_cart/cart_reducer';

@Component({
  selector: 'app-add-to-cart-detls',
  templateUrl: './add-to-cart-detls.component.html',
  styleUrls: ['./add-to-cart-detls.component.scss']
})

export class AddToCartDetlsComponent implements OnInit {
  @Input() cart_details : cart_Item;
  imgurl = "http://192.168.1.3:3000/images/products/";

  public counter: number = 1;
  
  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
  constructor(private store: Store<fromStore.ShoppingCartState>) { }

  ngOnInit(): void {
  }
  deleteItem() {
    this.store.dispatch(fromCartActions.Load_Delete_Product({id: this.cart_details.id}));
  }
}
