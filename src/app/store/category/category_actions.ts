import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/services/market_services/market_modal';


  export const get_All_Category = createAction(
    '[Product/API] List All category',
    props<{ get_category: Category[] }>()
  );
  export const Load_Category_Products = createAction(
    'Request Load Category Products',
  );
