import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/product_store/reducer';
import * as fromAction from '../../store/product_store/actions';
import * as fromSelect from '../../store/product_store/selecter';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ListProductComponent implements OnInit {
  @Input() listProduct : Product;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  imgurl = "http://192.168.1.3:3000/images/products/";
  // hero$: Observable<Product[]>;
  // Id: number;

  constructor(
    // private router: Router,
    // private store: Store<fromStore.ProductState>  
    ) { }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  ngOnInit(): void {

  }

}


