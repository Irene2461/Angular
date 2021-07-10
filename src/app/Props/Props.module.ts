import { ProductListComponent } from './ProductList/ProductList.component';
import { ProductComponent } from './Product/Product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductComponent,ProductListComponent],
  imports: [BrowserModule,FormsModule],
  exports: [ProductListComponent],
})
export class PropsModule { }
