import { TestBed } from '@angular/core/testing';

import { CartPriceService } from './cart-price.service';

describe('CartPriceService', () => {
  let service: CartPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
