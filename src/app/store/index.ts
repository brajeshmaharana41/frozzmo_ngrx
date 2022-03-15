import { ActionReducerMap } from "@ngrx/store";
import * as fromProduct from './product_store/reducer';
import * as fromCategory from './category/category_reducer';
import * as frombrand from './filter_store/brand_store/brand_reducer';
import * as fromcolor from './filter_store/color_store/color_reducer';
import * as fromprice from './filter_store/pricefilter_store/price_reducer';
import * as fromcart from './add_item_to_cart/cart_reducer'
interface AppState {
  productState: fromProduct.ProductState;
  categoryState: fromCategory.CategoryState;
  brandsState: frombrand.BrandState;
  colorState: fromcolor.ColorState;
  priceState: fromprice.PriceState;
  cartstate: fromcart.ShoppingCartState;
}

export const reducers: ActionReducerMap<AppState> = {
    productState: fromProduct.Product_reducer,
    categoryState: fromCategory.category_reducer,
    brandsState: frombrand.brand_reducer,
    colorState: fromcolor.color_reducer,
    priceState: fromprice.price_reducer,
    cartstate: fromcart.item_cart_reducer,
};
