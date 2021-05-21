import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscount } from 'src/app/shared/interfaces/discount.interface';
import { DiscountService } from 'src/app/shared/services/discount.service';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit {
  discount: IDiscount = null;
  constructor(private activatedRoute: ActivatedRoute,private discService: DiscountService) { }

  ngOnInit(): void {
    this.getOneDiscount();
  }

  getOneDiscount(): void {
    const ID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.discService.getJSONOneDiscount(ID).subscribe(
      data => {
        this.discount = data;
      },
      err => { console.log(err); }
    )
  }

  
}
