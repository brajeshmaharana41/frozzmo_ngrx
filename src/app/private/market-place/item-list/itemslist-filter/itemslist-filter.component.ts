import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../../../store/filter_store/brand_store/brand_actions';
import * as brandStore from '../../../../store/filter_store/brand_store/brand_reducer';
import * as fromSelector from '../../../../store/filter_store/brand_store/brand_selecter';

import * as colorsActions from '../../../../store/filter_store/color_store/color_actions';
import * as colorsStore from '../../../../store/filter_store/color_store/color_reducer';
import * as colorsSelector from '../../../../store/filter_store/color_store/color_selecter';

import * as priceActions from '../../../../store/filter_store/pricefilter_store/price_actions';
import * as priceStore from '../../../../store/filter_store/pricefilter_store/price_reducer';
import * as pricselector from '../../../../store/filter_store/pricefilter_store/price_selecter';

import { Observable } from 'rxjs';
import { Brand, Color, Price_mini_max } from 'src/app/services/market_services/market_modal';
@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;

  brands: Observable<Brand[]>;

  brandid: number;

  colors: Observable<Color[]>;

  seasons: Observable<Price_mini_max[]>;



  // seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  // brands: string[] = ['Apsara','Cross','Reynolds','ZesTale'];
  colorlists: string[] = [ 'Coffee','Ivory','Red'];
  // colors: string[] = ['Grey','Pink','Yellow'];
  constructor( private brandstore: Store<brandStore.BrandState>,  private colorstore: Store<colorsStore.ColorState>, private pricestore: Store<priceStore.PriceState> ) { }

  ngOnInit(): void {
    this.brandstore.dispatch(fromActions.Load_Brands_Products());
    this.brands = this.brandstore.select(fromSelector.brand$);

    this.colorstore.dispatch(colorsActions.Load_Colors_Products());
    this.colors = this.colorstore.select(colorsSelector.color$);

    this.pricestore.dispatch(priceActions.Load_Mini_Max_Products());
    this.seasons = this.pricestore.select(pricselector.mini$_max$);
  }
  onChange($event: any) {
    this.brandid = $event.value
   console.log(this.brandid);
  }  
}
