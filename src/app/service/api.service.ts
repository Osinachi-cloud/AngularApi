import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // getProduct(){
  //   return this.http.get<any>("https://fakestoreapi.com/products")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getProducts():Observable<any[]>{
      return this.http.get<any>("https://fakestoreapi.com/products");
      // .pipe(map((res:any)=>{
      //   return res;
      // }))
  }
}
