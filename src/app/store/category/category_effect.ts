import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import { get_All_Category, Load_Category_Products } from './category_actions';
 
@Injectable()
export class Category_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getcategorys$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Category_Products),
    switchMap(action => this.productServices.getCategory().pipe(
      map (data => get_All_Category({ get_category: data}))
      ))
    )
  );
}