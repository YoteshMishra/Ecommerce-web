import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { CartComponent } from './header/cart/cart.component';
import { AccountComponent } from './header/account/account.component';
import { OrdersComponent } from './header/orders/orders.component';
import { OrderDetailsComponent } from './header/orders/order-details/order-details.component';
import { WishlistComponent } from './header/wishlist/wishlist.component';
import { ProductDetailsComponent } from './header/wishlist/product-details/product-details.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: AccountComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
