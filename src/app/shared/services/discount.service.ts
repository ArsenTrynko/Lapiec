import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDiscount } from '../interfaces/discount.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private dbPath: string;
  constructor(private http: HttpClient) {
    this.dbPath = 'http://localhost:3000/discount';
  }



  getJSONDiscount(): Observable<Array<IDiscount>>{
    return this.http.get<Array<IDiscount>>(this.dbPath);
  }

  postJSONDiscount(discount: IDiscount): Observable<IDiscount> {
    return this.http.post<IDiscount>(this.dbPath, discount);
  }

  deleteJSONDiscount(id: number): Observable<IDiscount> {
    return this.http.delete<IDiscount>(`${this.dbPath}/${id}`);
  }

  putJSONDiscount(discount: IDiscount): Observable<IDiscount> {
    return this.http.put<IDiscount>(`${this.dbPath}/${discount.id}`, discount)
  }

  getJSONOneDiscount(id: number): Observable<IDiscount> {
    return this.http.get<IDiscount>(`${this.dbPath}/${id}`);
  }
}
