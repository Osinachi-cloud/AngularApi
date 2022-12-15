import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './components/myform/myform.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SingleProductComponent } from './components/singleproduct/singleproduct.component';

const routes: Routes = [
   {
      path:"product", component: MyformComponent
   },
   {
      path:"products", component: ProductlistComponent,
   },
   {
    path:`products/:id`, component: SingleProductComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
