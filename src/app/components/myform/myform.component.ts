import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  getProductFormData(data:any){
    this.apiService.saveUser(data)
    .subscribe({
      next:(res:any)=>{
          console.log("success", res)
      },
      error:(err:any)=>{
          console.log("error", err)
      }
    });
  }
  

  ngOnInit(): void {
  }

}
