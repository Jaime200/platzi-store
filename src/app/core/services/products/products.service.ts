
import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import {  delay, } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = []
    // {
    //   id: '1',
    //   image: 'assets/images/camiseta.png',
    //   title: 'Camiseta',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '2',
    //   image: 'assets/images/hoodie.png',
    //   title: 'Hoodie',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '3',
    //   image: 'assets/images/mug.png',
    //   title: 'Mug',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '4',
    //   image: 'assets/images/pin.png',
    //   title: 'Pin',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '5',
    //   image: 'assets/images/stickers1.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
    // {
    //   id: '6',
    //   image: 'assets/images/stickers2.png',
    //   title: 'Stickers',
    //   price: 80000,
    //   description: 'bla bla bla bla bla'
    // },
  //];
  constructor(
    private httpClient: HttpClient
  ) { }

  
  getAllProducts(){
    //return this.products
   return  this.httpClient
        .get<Product[]>(`${environment.urlApi}/products`)

  }

  getProdut(id:string){
    
    return this.httpClient
    .get<Product>(`${environment.urlApi}/products/${id}`)
  }

  createProduct(product:Product){
    return this.httpClient.post<Product>(`${environment.urlApi}/products`,product)
  }

  updateproduct(id:string,change:Partial<Product>){
    return this.httpClient
    .put(`${environment.urlApi}/products/${id}`,change)
  }

  deleteProduct(id:string){
    return this.httpClient
    .delete(`${environment.urlApi}/products/${id}`)
  }
}
