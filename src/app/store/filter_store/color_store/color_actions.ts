import { createAction, props } from '@ngrx/store';
import { Color } from 'src/app/services/market_services/market_modal';

  export const get_All_Colors = createAction(
    '[Product/API] List All Colors',
    props<{ get_colors: Color[] }>()
  );
  export const Load_Colors_Products = createAction(
    'Request Load Colors Products',
  );