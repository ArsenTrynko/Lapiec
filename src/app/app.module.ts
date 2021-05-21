import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './main-components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './main-components/footer/footer.component';

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
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';


import { DiscountDetailsComponent } from './pages/discount-details/discount-details.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DiscountComponent,
    PizzaComponent,
    SalatsComponent,
    DessertComponent,
    DrinksComponent,
    PaymentComponent,
    FranchiseComponent,
    AmdinMainComponent,
    AdminCategoryComponent,
    AdminDiscountComponent,
    DiscountDetailsComponent,
    AdminProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
