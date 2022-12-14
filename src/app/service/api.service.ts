import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProducts():Observable<any[]>{
      return this.http.get<any>("http://localhost:3000/products")
  }
  saveUser(data:any){
    return this.http.post<any>(`http://localhost:3000/products`, data);
  }
}
