import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as priceStore from './price_reducer';

const priceSelector = createFeatureSelector<priceStore.PriceState>(priceStore.PriceFeatureKey);

export const mini$_max$ = createSelector(priceSelector, priceStore.selectAll);
