import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Color } from 'src/app/services/market_services/market_modal';
import * as colorActions from './color_actions';

export const ColorFeatureKey = 'Color_data';

export interface ColorState extends EntityState<Color> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Color> = createEntityAdapter<Color>();

export const initialState: ColorState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const color_reducer = createReducer(
  initialState,
  on(colorActions.get_All_Colors,
    (state, action) => adapter.setAll(action.get_colors, {
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
