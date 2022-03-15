import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './cart_reducer';

const cartSelector = createFeatureSelector<fromStore.ShoppingCartState>(fromStore.cart_item_FeatureKey);

export const selectCartCount$ = createSelector(cartSelector, fromStore.selectAll);



