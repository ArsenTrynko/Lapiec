import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';
import { DiscountService } from 'src/app/shared/services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  userDiscounts: Array<IDiscount> = [];
  constructor(private discService: DiscountService) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getDiscounts(): void {
    this.discService.getJSONDiscount().subscribe(
      data => {
        this.userDiscounts = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
