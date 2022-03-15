import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as brandStore from './brand_reducer';

const brandSelector = createFeatureSelector<brandStore.BrandState>(brandStore.BrandFeatureKey);

export const brand$ = createSelector(brandSelector, brandStore.selectAll);
