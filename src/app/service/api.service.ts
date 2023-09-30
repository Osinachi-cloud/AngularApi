import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
// import 'rxjs/add/operator/catch'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<IProduct[]> {
      // return this.http.get<any>("http://localhost:3000/products")
     return this.http.get<any>("");
  }
  saveUser(data:any){
    // return this.http.post<IProduct>(`http://localhost:3000/products`, data);
    return this.http.post<IProduct>(``, data);
  }
  getProduct(id:number):Observable<IProduct>{
      // return this.http.get<any>(`http://localhost:3000/products/${id}`);
      return this.http.get<any>(`${id}`);

  }
}
