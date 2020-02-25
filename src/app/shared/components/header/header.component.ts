import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalProductos$ : Observable<number>;
  constructor(
    private CartService: CartService
  ) { }

  ngOnInit() {
    this.totalProductos$ = this.CartService.cart$
                                .pipe(
                                  map(products => products.length )
                                )
    
    // .subscribe(total => {
    // console.log(total)
    // this.totalProductos = total
    // })
  }


}
