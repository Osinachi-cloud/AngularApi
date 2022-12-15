import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  isFetchingUrl : boolean = true;
  public apiProducts: any[] = [];
  errorMessage :string = "";

  constructor(private apiService : ApiService, private router : Router ) {

  }

  getProducts(){
    return this.apiService.getProducts();
  }
  getProductDetails(id:number ){
    console.log("hello world")
    this.router.navigate(['products',id])

  }
  
  ngOnInit(){
      this.getProducts()
      .subscribe({
        next:(data)=>{ 
          this.apiProducts = data
          console.log(this.apiProducts);
        },
      error:(err)=>{
                this.isFetchingUrl = false;
                this.errorMessage = "error in getching url"
                console.log("Bigerror",err);
      }});
   
  }
}
