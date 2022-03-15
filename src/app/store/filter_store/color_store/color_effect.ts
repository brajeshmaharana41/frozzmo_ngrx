import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import {get_All_Colors, Load_Colors_Products } from './color_actions';
 
@Injectable()
export class Color_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getcolors$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Colors_Products),
    switchMap(action => this.productServices.getColors().pipe(
      map (res => get_All_Colors({ get_colors: res}))
      ))
    )
  );
}