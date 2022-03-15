import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import { get_All_Products, get_Product_details, Load_All_Products, Load_Product_detailes } from './actions';
 
@Injectable()
export class Product_Effects {



  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(Load_All_Products),
    switchMap(action =>{
      const params: any = {
        page : action.CurentPage +1,
        pagesize: action.pageSize,
      }
      if(action.Brandsid){
        params['brandId'] = action.Brandsid;
      }
      if(action.Categoryid){
        params['categoryId'] = action.Categoryid;
      }
      if(action.Colorsid){
        params['colorId'] = action.Colorsid;
      }
      if(action.MaximumPrice){
        params['maxprice'] = action.MaximumPrice;
      }
      if(action.MinimumPrice){
        params['miniprice'] = action.MinimumPrice;
      }
      return this.productServices.getAllProducts(params).pipe(
      map (data => get_All_Products({ get_all_products: data.rows, totalRows: data.count}))
      )})
    ) 
  );

  getProduct_details$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Product_detailes),
    switchMap(action => this.productServices.get_prod_details(action.id).pipe(
      map (data =>{ 
        // console.log (data)
        return get_Product_details({ get_product: data})})
      ))
    )
  );
}