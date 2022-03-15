import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../../services/market_services/market_modal';
import * as ProductActions from './actions';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  isLoading: boolean;
  error: string | null;
  pagesize: number;
  currentPage: number;
  brandid: number;
  colorid: number;
  minimumPrice: number;
  maximumPrice: number;
  categorysid: number;
  totalRows: number;
  id:number;
  product: Product | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  isLoading: true,
  error: null,
  pagesize : 0,
  currentPage : 0,
  totalRows : 0,
  brandid: 1,
  colorid: 1,
  minimumPrice: 50,
  maximumPrice: 100,
  categorysid: 1,
  id: 1,
  product: null,
});

export const Product_reducer = createReducer(
  initialState,
  on(ProductActions.get_All_Products,
    (state, action) => adapter.setAll(action.get_all_products, {
        ...state,
        isLoading: false,
        totalRows: action.totalRows
    })
  ),
  on(ProductActions.Load_All_Products,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true,
      currentPage: action.CurentPage,
      pagesize: action.pageSize,
      brandid: action.Brandsid,
      colorid: action.Colorsid,
      minimumPrice: action.MinimumPrice,
      maximumPrice: action.MaximumPrice,
      categorysid: action.Categoryid
    })
  ),
  on(ProductActions.Load_Product_detailes,
    (state, action) => ({
      ...state,
      isLoading: true,
    })
  ),
  on(ProductActions.get_Product_details,
    (state, action) =>  {
    return {
      ...state,
        isLoading: false,
        product: action.get_product,

    }
  }
),
on(ProductActions.addProduct,
  (state, action) => adapter.addOne(action.add_product_cart, state)
),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
