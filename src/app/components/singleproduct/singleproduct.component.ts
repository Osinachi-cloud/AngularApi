import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { filter } from 'rxjs/operators'
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleProductComponent implements OnInit {

  id:number = 0;
  singleProduct: any;
 

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.apiService.getProduct(this.id).subscribe((res)=>{
        this.singleProduct = res;
      })
  }
}
