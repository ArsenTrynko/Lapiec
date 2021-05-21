import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: Array<IProduct> = []
  totalOrderPrice = 0;
  name:string='';
  phone:string='';
  coment:string='';
  city:string='';
  street:string='';
  numberHouse:string='';
  orderProducts:string='';

  // %0D%0A

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.renderCartProducts();
  }


  renderCartProducts(): void {
    this.cartProducts = JSON.parse(sessionStorage.Products)
    this.totalOrderPrice = this.cartProducts.reduce(function(sum, current) {
      return sum + Number(current.price) ;
    }, 0);
  }

  renderOrderProducts():void{
    this.orderProducts = ''
    for(let i=0;i<this.cartProducts.length;i++){
      this.orderProducts += `${i+1}) <b>Назва:</b> ${this.cartProducts[i].name}, <b>Ціна:</b> ${this.cartProducts[i].price} Грн%0D%0A`
    }
  }

  sendOrder():void {
    this.renderOrderProducts();
    this.http.get(`http://pushmebot.ru/send?key=74c63b72479ec855fd35839b39886625&message=<b>Імя:</b> ${this.name}%0D%0A<b>Телефон:</b> ${this.phone}%0D%0A<b>Коментар:</b> ${this.coment}%0D%0A<b>Місто:</b> ${this.city}%0D%0A<b>Вулиця:</b> ${this.street}%0D%0A<b>Номер будинку:</b> ${this.numberHouse}%0D%0A<b>-----------ЗАМОВЛЕННЯ-----------</b>%0D%0A${this.orderProducts}<b>СУММА: </b>${this.totalOrderPrice} Грн`).subscribe(data =>{})
    this.name = '';
    this.coment = '';
    this.phone = '';
    this.city = '';
    this.street = '';
    this.numberHouse = '';
    this.cartProducts = [];
    this.totalOrderPrice = 0;
    sessionStorage.clear();



  }

}
