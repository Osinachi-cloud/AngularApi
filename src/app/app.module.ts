import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { CartComponent } from './components/cart/cart.component';
import { SingleProductComponent } from './components/singleproduct/singleproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { ApiService } from './service/api.service';
import { MyformComponent } from './components/myform/myform.component';
import {FormsModule} from '@angular/forms'
import { Routes } from '@angular/router';

// const routes: Routes = [
//     {
//       path:"product", component: MyformComponent
//     }
// ]

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    SingleProductComponent,
    DialogComponent,
    MyformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    // MatDialog
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
