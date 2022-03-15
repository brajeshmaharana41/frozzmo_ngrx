import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './reducer';

const productsSelector = createFeatureSelector<fromStore.ProductState>(fromStore.productsFeatureKey);

export const isLoading = createSelector(productsSelector, (state: fromStore.ProductState) => state.isLoading);

export const products = createSelector(productsSelector, fromStore.selectAll);

export const error = createSelector(productsSelector,  (state: fromStore.ProductState) => state.error);

export const pageCountSize = createSelector(productsSelector,  (state: fromStore.ProductState) => state.pagesize);

export const currentPageCount = createSelector(productsSelector,  (state: fromStore.ProductState) => state.currentPage);

export const brandCountId = createSelector(productsSelector,  (state: fromStore.ProductState) => state.brandid);

export const colorcountId = createSelector(productsSelector,  (state: fromStore.ProductState) => state.colorid);

export const categoryCountId = createSelector(productsSelector,  (state: fromStore.ProductState) => state.categorysid);

export const MaxCountPrice = createSelector(productsSelector,  (state: fromStore.ProductState) => state.maximumPrice);

export const MiniCountPrice = createSelector(productsSelector,  (state: fromStore.ProductState) => state.minimumPrice);

export const totalCount = createSelector(productsSelector,  (state: fromStore.ProductState) => state.totalRows);

export const getdetails$ = createSelector(productsSelector,  (state: fromStore.ProductState) => state.product);
