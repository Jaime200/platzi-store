import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product : Product
  constructor(
    private activateRoute: ActivatedRoute,
    private productsService:ProductsService
  ) { 

  }

  ngOnInit() {
    this.activateRoute
        .params
        .subscribe(
          (params:Params)=>{            
            const id = params.id
            this.product = this.productsService.getProdut(id);            
            
          }
        )
  }

}
