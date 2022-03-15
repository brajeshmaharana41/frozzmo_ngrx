import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemShortPopupComponent } from './item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './item-filter-popup/item-filter-popup.component'
import { Store } from '@ngrx/store';
import * as fromActions from '../../../../store/category/category_actions';
import * as categoryStore from '../../../../store/category/category_reducer';
import * as fromSelector from '../../../../store/category/category_selecter';
import { Observable } from 'rxjs';
import { Category } from 'src/app/services/market_services/market_modal';
@Component({
  selector: 'app-itemslist-header',
  templateUrl: './itemslist-header.component.html',
  styleUrls: ['./itemslist-header.component.scss']
})
export class ItemslistHeaderComponent implements OnInit {

  categorys$: Observable<Category[]>;

  constructor(public dialog: MatDialog, private store: Store<categoryStore.CategoryState>) { }
  openshortDialog(){
    this.dialog.open(ItemShortPopupComponent, {
      width: '250px',
    });
  }

  opensfilterDialog(){
    this.dialog.open(ItemFilterPopupComponent, {
      height: '600px',
      width: '300px', 
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.Load_Category_Products());
    this.categorys$ = this.store.select(fromSelector.catogory$);
    console.log("hello", this.categorys$)
  }
}
