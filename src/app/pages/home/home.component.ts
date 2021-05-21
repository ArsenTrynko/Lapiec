import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProducts: Array<IProduct> = [];
  constructor(private prodService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(): void {
    this.prodService.getJSONProduct("pizza").subscribe(
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
