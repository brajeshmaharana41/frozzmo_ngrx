import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/services/market_services/market_modal';
import * as filterActions from './brand_actions';

export const BrandFeatureKey = 'flitter_data';

export interface BrandState extends EntityState<Brand> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Brand> = createEntityAdapter<Brand>();

export const initialState: BrandState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const brand_reducer = createReducer(
  initialState,
  on(filterActions.get_All_Brands,
    (state, action) => adapter.setAll(action.get_brands, {
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
