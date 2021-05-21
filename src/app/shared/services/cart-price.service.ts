import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartPriceService {
  private subject$ = new Subject();
  constructor() { }

  emit(event: Number) {
    this.subject$.next(event)
  }

  on(action: any): Subscription {
    return this.subject$.subscribe(action);
  }
}
