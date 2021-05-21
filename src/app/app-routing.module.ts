import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { SalatsComponent } from './pages/salats/salats.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { AmdinMainComponent } from './admin/amdin-main/amdin-main.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { DiscountDetailsComponent } from './pages/discount-details/discount-details.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CartComponent } from './pages/cart/cart.component';





const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'salats', component: SalatsComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'discount-details/:id', component: DiscountDetailsComponent },
  { path: 'admin', component: AmdinMainComponent, children: [
    { path: '', pathMatch: 'full' , redirectTo: 'category' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'product', component: AdminProductsComponent },
    { path: 'discount', component: AdminDiscountComponent },

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
