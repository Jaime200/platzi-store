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
    private productsService$:ProductsService
  ) { 

  }

  ngOnInit() {
    this.activateRoute
        .params
        .subscribe(
          (params:Params)=>{            
            const id = params.id
            this.fechProduct(id);            
          }
        )
  }

  fechProduct(id){
    this.productsService$.getProdut(id).subscribe(product => this.product = product)     
  }


  createProduct(){
    const newProduct:Product = {
      id: '333',
      title:'Producto nuevo',
      image : 'assets/images/banner-1.jpg',
      price : 3000,
      description: 'Producto nuevo'
    }
    this.productsService$
        .createProduct(newProduct)
        .subscribe(product => console.log(product));
  }

  updateProduct(){
    const updateProduct:Partial<Product> = {
      price : 5000,
      description: 'Edición Producto nuevo'
    }
    this.productsService$
        .updateproduct('333',updateProduct)
        .subscribe(product => console.log(product));
  }

  deleteProduct(){
    this.productsService$
        .deleteProduct('333')
        .subscribe(product => console.log(product));
  }

}
