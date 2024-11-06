import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BodyHeadComponent } from './body-head/body-head.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './header/cart/cart.component';
import { AccountComponent } from './header/account/account.component';
import { OrdersComponent } from './header/orders/orders.component';
import { OrderDetailsComponent } from './header/orders/order-details/order-details.component';
import { WishlistComponent } from './header/wishlist/wishlist.component';
import { ProductDetailsComponent } from './header/wishlist/product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { TopOffersComponent } from './body-head/top-offers/top-offers.component';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'top-offers', component: TopOffersComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BodyHeadComponent,
    ImageCarouselComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    OrderDetailsComponent,
    WishlistComponent,
    ProductDetailsComponent,
    FooterComponent,
    TopOffersComponent,
    CookieConsentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
