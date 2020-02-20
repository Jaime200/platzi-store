import { Component, Input, Output, EventEmitter, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {  /*OnChanges,*/
    @Input() producto: Product;
    @Output() productClick: EventEmitter<Product> = new EventEmitter();
    
    today = new Date();
    constructor() {
        console.log('constructor');
    }
    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('Docheck');
    }

    ngOnDestroy() {
        console.log('onDestroy');
    }

    addCar(producto: Product) {
       // console.log('agregar al carrito', producto)
        this.productClick.emit(producto);
    }
}
