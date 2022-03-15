import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/services/market_services/market_modal';
import * as CategoryActions from './category_actions';

export const categorysFeatureKey = 'category';

export interface CategoryState extends EntityState<Category> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const category_reducer = createReducer(
  initialState,
  on(CategoryActions.get_All_Category,
    (state, action) => adapter.setAll(action.get_category, {
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
