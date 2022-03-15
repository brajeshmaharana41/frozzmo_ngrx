import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as categoryStore from './category_reducer';

const categorySelector = createFeatureSelector<categoryStore.CategoryState>(categoryStore.categorysFeatureKey);

export const catogory$ = createSelector(categorySelector, categoryStore.selectAll);



