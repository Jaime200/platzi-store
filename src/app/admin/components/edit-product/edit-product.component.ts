import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../../core/services/products/products.service';
import { CustomValidator } from '../../../utils/customValidators';
import {  ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  form : FormGroup
  product : Product
  id: string
  constructor(
    private formBuilder: FormBuilder,
    private ProductsService:ProductsService,
    private _snackBar: MatSnackBar,
    private activateRoute: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activateRoute
        .params
        .subscribe(
          (params:Params)=>{            
            this.id = params.id            
            this.ProductsService.getProdut(this.id).subscribe(product =>{ 
              this.product = product
              this.form.patchValue(this.product)          
            })                 
          }
        )
  }

  private buildForm(){
    this.form= this.formBuilder.group({     
      title:        ['', [Validators.required]],
      price:        [0,[Validators.required, CustomValidator.isPriceValid]],
      image:        [''],
      description:  ['', Validators.required]
    })
  }

  editProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product = this.form.value
      this.ProductsService.updateproduct(this.id,product)
          .subscribe(
            newProduct =>{
              console.log(newProduct);
              this._snackBar.open('Producto editado', 'Editado', {
                duration: 2000,                
              });
            }
          );
    }
  }

  get priceField(){
    return this.form.get('price')
  }

}
