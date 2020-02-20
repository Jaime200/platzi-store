import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    
  ]
})
export class ProductModule { }
