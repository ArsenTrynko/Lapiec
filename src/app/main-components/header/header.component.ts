import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CartPriceService } from 'src/app/shared/services/cart-price.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCartPrice = 0;
  constructor(private cartService: CartService,private cartPtice: CartPriceService) { }

  ngOnInit(): void {
    this.getPrice();
    this.cartPtice.on((data:Number) => {
      this.totalCartPrice = Number(data);
    })
  }

  
  getPrice(): void{
    this.totalCartPrice = this.cartService.totalCartPrice;
  }

}
