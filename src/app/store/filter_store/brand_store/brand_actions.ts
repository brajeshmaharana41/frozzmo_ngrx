import { createAction, props } from '@ngrx/store';
import { Brand } from 'src/app/services/market_services/market_modal';


  export const get_All_Brands = createAction(
    '[Product/API] List All Brands',
    props<{ get_brands: Brand[] }>()
  );
  export const Load_Brands_Products = createAction(
    'Request Load Brand Products',
  );