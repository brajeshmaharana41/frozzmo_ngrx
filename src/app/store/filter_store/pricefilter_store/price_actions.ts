import { createAction, props } from '@ngrx/store';
import { Price_mini_max } from 'src/app/services/market_services/market_modal';

  export const get_mini_max = createAction(
    '[Product/API] List All Mini and Max',
    props<{ get_price: Price_mini_max[] }>()
  );
  export const Load_Mini_Max_Products = createAction(
    'Request Load Mini and Max Price',
  );