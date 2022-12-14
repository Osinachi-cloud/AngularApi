import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isDisplayed : boolean = false;
  public apiProducts: any[] = [];

  constructor(private apiService : ApiService) {

  }

  getProducts(){
    return this.apiService.getProducts();
  }
  
  ngOnInit(){
    this.getProducts()
    .subscribe(data => this.apiProducts = data);
  }
}
