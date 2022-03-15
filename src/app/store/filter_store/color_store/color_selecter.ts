import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as colorStore from './color_reducer';

const colorSelector = createFeatureSelector<colorStore.ColorState>(colorStore.ColorFeatureKey);

export const color$ = createSelector(colorSelector, colorStore.selectAll);
