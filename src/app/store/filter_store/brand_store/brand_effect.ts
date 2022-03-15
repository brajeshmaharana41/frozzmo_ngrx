import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import { get_All_Brands, Load_Brands_Products } from './brand_actions';
 
@Injectable()
export class Brand_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getbrands$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Brands_Products),
    switchMap(action => this.productServices.getBrand().pipe(
      map (data => get_All_Brands({ get_brands: data}))
      ))
    )
  );
}