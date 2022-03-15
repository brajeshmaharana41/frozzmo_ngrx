import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/services/market_services/market_modal';


export const Load_All_Products = createAction(
    '[Product/API] Request Load Products',
    props<{ pageSize: number; 
            CurentPage: number; 
            Brandsid: number; 
            Colorsid: number;
            MaximumPrice: number;
            MinimumPrice: number;
            Categoryid: number;
          }>()
  );
  export const get_All_Products = createAction(
      '[Product/API] Load Products',
      props<{ get_all_products: Product[], totalRows: number}>()
    );

  export const Load_Product_detailes = createAction(
    '[Product/API] Request Load Products',
    props<{ id: any; }>()
  );
  export const get_Product_details = createAction(
      '[Product/API] Product',
      props<{ get_product: Product}>()
    );
  export const addProduct = createAction(
    '[Product/API] Add Product',
    props<{ add_product_cart: Product }>()
  );