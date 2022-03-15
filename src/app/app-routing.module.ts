import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthComponent } from './auth/auth.component';
import { SchoolVerifyComponent } from './auth/school-verify/school-verify.component';
import { SchoolDetailsComponent } from './auth/school-details/school-details.component';
import { AllSetComponent } from './auth/all-set/all-set.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetEmailComponent } from './auth/reset-email/reset-email.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { WalletComponent } from './private/dashboard/wallet/wallet.component';
import { MarketPlaceComponent } from './private/market-place/market-place.component';
import { ItemSelectedComponent } from './private/market-place/item-selected/item-selected.component';
import { CartItemsComponent } from './private/market-place/cart-items/cart-items.component';
import { MyAccountComponent } from './private/my-account/my-account.component';

import { OrdersComponent } from './private/my-account/orders/orders.component';
import { OrdersListComponent } from './private/my-account/orders/orders-list/orders-list.component';
import { AccountDetailsComponent } from './private/my-account/account-details/account-details.component';
import { AddressBookComponent } from './private/my-account/address-book/address-book.component';

import { PaymentCardComponent } from './private/my-account/payment-card/payment-card.component';
import { MarketingPreferencesComponent } from './private/my-account/marketing-preferences/marketing-preferences.component';
import { ReferTeacherComponent } from './private/my-account/refer-teacher/refer-teacher.component';
import { InviteSuccessComponent } from "./private/my-account/refer-teacher/invite-success/invite-success.component";
import { FavoritesComponent } from "../app/private/favorites/favorites.component";
import { SearchResultComponent } from "./components/search-result/search-result.component"
import { ReviewInputComponent } from "./private/my-account/orders/review-input/review-input.component";
const routes: Routes = [
  
  // { path:'', component: PublicComponent },

  { path:'', component: AuthComponent },

  { path:'school-details', component: SchoolDetailsComponent },

  { path:'school-verify', component: SchoolVerifyComponent },

  { path:'all-set', component: AllSetComponent },

  { path:'forgot', component: ForgotComponent },

  { path:'reset', component: ResetComponent },

  { path:'reset-email', component: ResetEmailComponent },

  { path:'dashboard', component: DashboardComponent },

  { path:'wallet', component: WalletComponent },

  { path:'market-place', component: MarketPlaceComponent },

  { path:'item-selected/:id', component: ItemSelectedComponent },

  { path:'cart-items', component: CartItemsComponent },

  { path:'my-account', component: MyAccountComponent },

  { path:'search-result', component: SearchResultComponent },

  { path:'orders', component: OrdersComponent },

  { path:'account-details', component: AccountDetailsComponent },

  { path:'address-book', component: AddressBookComponent },

  { path:'card', component: PaymentCardComponent },

  { path:'preferences', component: MarketingPreferencesComponent },

  { path:'refer', component: ReferTeacherComponent },

  { path:'orders-list', component: OrdersListComponent },

  { path:'favorites', component: FavoritesComponent },

  { path: 'invite-success', component: InviteSuccessComponent },

  { path: 'review-input', component: ReviewInputComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
