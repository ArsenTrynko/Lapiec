import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public dbPathDetail: string;
  private dbPath: string;
  constructor(private http: HttpClient) {
  
  }

  init():void{
  this.dbPath = `http://localhost:3000/${this.dbPathDetail}`;
  }

  getJSONProduct(path : string): Observable<Array<IProduct>>{
    this.dbPathDetail = path;
    this.init()
    return this.http.get<Array<IProduct>>(this.dbPath);
  }

  postJSONProduct(discount: IProduct,path : string): Observable<IProduct> {
    this.dbPathDetail = path;
    this.init()
    return this.http.post<IProduct>(this.dbPath, discount);
  }

  deleteJSONProduct(id: number,path : string): Observable<IProduct> {
    this.dbPathDetail = path;
    this.init()
    return this.http.delete<IProduct>(`${this.dbPath}/${id}`);
  }

  putJSONProduct(discount: IProduct,path : string): Observable<IProduct> {
    this.dbPathDetail = path;
    this.init()
    return this.http.put<IProduct>(`${this.dbPath}/${discount.id}`, discount)
  }

  getJSONOneProduct(id: number,path : string): Observable<IProduct> {
    this.dbPathDetail = path;
    this.init()
    return this.http.get<IProduct>(`${this.dbPath}/${id}`);
  }
}
