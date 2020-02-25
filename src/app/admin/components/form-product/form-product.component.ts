import { CustomValidator } from './../../../utils/customValidators';
import { finalize } from 'rxjs/operators'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductsService } from '../../../core/services/products/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage'
import 'firebase/storage';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit, OnDestroy {

  form : FormGroup
  image$:Observable<any>
  Sub:Subscription 
  SubImage:Subscription
  constructor(
    private formBuilder: FormBuilder,
    private ProductsService: ProductsService,
    private _snackBar: MatSnackBar,
    private storage:AngularFireStorage
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    
  }

  private buildForm(){
    this.form= this.formBuilder.group({
      id:           ['', [ Validators.required]],
      title:        ['', [Validators.required]],
      price:        [0,[Validators.required, CustomValidator.isPriceValid]],
      image:        [''],
      description:  ['', Validators.required]
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const product = this.form.value
      this.ProductsService.createProduct(product)
          .subscribe(
            newProduct =>{
              console.log(newProduct);
              this._snackBar.open('Producto creado', 'Creado', {
                duration: 2000,
                
              });
            }
          );
    }
  }

  get priceField(){
    return this.form.get('price')
  }

  uploadFile(event){
    const file = event.target.files[0]
    console.log(file)
    const dir ='images'
    const name = file['name']
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name,file)
    task.snapshotChanges()
        .pipe(
          finalize(() => {
          this.image$ = fileRef.getDownloadURL()
          this.SubImage= this.image$.subscribe( url => {
               this.form.get('image').setValue(url);
             })
          }
            )
        ).subscribe()
  }

  ngOnDestroy() {
    if(this.Sub !== undefined) this.Sub.unsubscribe();
    if(this.SubImage !== undefined) this.SubImage.unsubscribe();
    
    
  }

}
