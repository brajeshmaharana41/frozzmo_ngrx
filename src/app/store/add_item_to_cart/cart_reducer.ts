import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { cart_Item } from 'src/app/services/market_services/cart_module';
import * as ShoppingCartActions from './cart_actions';

export const cart_item_FeatureKey = 'category';

export interface ShoppingCartState extends EntityState<cart_Item> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<cart_Item> = createEntityAdapter<cart_Item>();

export const initialState: ShoppingCartState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const item_cart_reducer = createReducer(
  initialState,
  on(ShoppingCartActions.Cart_Action,
    (state, action) => adapter.setAll(action.cart_items, {
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
