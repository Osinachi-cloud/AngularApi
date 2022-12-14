import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService : ApiService) {

  }

  getProducts(){
    return this.apiService.getProducts();
  }
  
  ngOnInit(){
      this.getProducts()
      .subscribe({
        next:(data)=>{ 
          this.apiProducts = data
        },
      error:(err)=>{
                this.isFetchingUrl = false;
                this.errorMessage = "error in getching url"
                console.log("Bigerror",err);
      }});
   
  }
}
