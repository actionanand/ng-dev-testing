import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './Pages/product-page/product-details/product-details.component';
import { AlertDetailsComponent } from './Pages/product-page/alert-details/alert-details.component';
import { ProductShopComponent } from './Pages/product-shop/product-shop.component';
import { LandingpageComponent } from './Pages/landingpage/landingpage.component';
import { CartItemsComponent } from './Pages/cart-items/cart-items.component';
import { CheckoutformComponent } from './Pages/checkoutform/checkoutform.component';
import { FormsModule } from '@angular/forms';
import { LibraryDashboardComponent } from './Pages/library-dashboard/library-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingpageComponent,
    CartItemsComponent,
    CheckoutformComponent,
    LibraryDashboardComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }