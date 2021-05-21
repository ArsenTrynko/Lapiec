import { Injectable } from '@angular/core';
import { CartPriceService } from './cart-price.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public totalCartPrice = 0;
  private productList = [];

  constructor(private prodServ: ProductService,private cartPrice: CartPriceService) { }




  loadToSessionStorage(): void {
    sessionStorage.clear();
    sessionStorage.setItem('Products', JSON.stringify(this.productList));

  }


  setProduct(prod): void {
    this.productList.push(prod)
    
    this.loadToSessionStorage();
    this.getTotalPrice();

  }

  getTotalPrice(): void {
    this.totalCartPrice = this.productList.reduce(function(sum, current) {
      return sum + Number(current.price) ;
    }, 0);
    this.cartPrice.emit(new Number(this.totalCartPrice));
  }





}
