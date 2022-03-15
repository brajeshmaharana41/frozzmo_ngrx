import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import { get_mini_max, Load_Mini_Max_Products } from './price_actions';
 
@Injectable()
export class Price_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getPrice$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Mini_Max_Products),
    switchMap(action => this.productServices.get_Mini_Max().pipe(
      map (res => get_mini_max({ get_price: res}))
      ))
    )
  );
}