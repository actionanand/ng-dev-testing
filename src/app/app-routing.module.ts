import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartItemsComponent } from './Pages/cart-items/cart-items.component';
import { CheckoutformComponent } from './Pages/checkoutform/checkoutform.component';
import { LandingpageComponent } from './Pages/landingpage/landingpage.component';
import { LibraryDashboardComponent } from './Pages/library-dashboard/library-dashboard.component';
import { ProductDetailsComponent } from './Pages/product-page/product-details/product-details.component';
import { ProductShopComponent } from './Pages/product-shop/product-shop.component';

const routes: Routes =
 [ 
  {path: 'products/:productId', component: ProductShopComponent },
  {path: 'products', component: ProductDetailsComponent },
  {path: 'cart', component: CartItemsComponent },
  {path: '', component: LandingpageComponent },
  {path: 'checkout', component: CheckoutformComponent },
  {path: 'library', component: LibraryDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
