import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {
  
  userProducts: Array<IProduct> = [];
  constructor(private prodService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(): void {
    this.prodService.getJSONProduct("deserts").subscribe(
      data => {
        this.userProducts = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  
  addToStorage(prod):void{
    this.cartService.setProduct(prod);
  }
}
