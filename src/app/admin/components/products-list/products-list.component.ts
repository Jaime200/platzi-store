import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  //variables globales
  public Products : Product[]
  displayedColumns: string[] = ['id', 'title', 'price','actions'];
  //-----------------------
  constructor(
    private productsService$: ProductsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService$
        .getAllProducts()
        .subscribe(
          products => this.Products = products
        )
  }
  deleteProduct(id:string){
    this.productsService$.deleteProduct(id)
        .subscribe(resp => {
          this._snackBar.open('Producto eliminado', 'Eliminado', {
            duration: 2000,
            
          });
          this.fetchProducts();
        })
  }

}
