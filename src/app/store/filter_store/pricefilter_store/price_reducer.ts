import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Price_mini_max } from 'src/app/services/market_services/market_modal';
import * as priceActions from './price_actions';

export const PriceFeatureKey = 'Price_data';

export interface PriceState extends EntityState<Price_mini_max> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Price_mini_max> = createEntityAdapter<Price_mini_max>();

export const initialState: PriceState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const price_reducer = createReducer(
  initialState,
  on(priceActions.get_mini_max,
    (state, action) => adapter.setAll(action.get_price, {
        ...state,
        isLoading: false,
    })
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
