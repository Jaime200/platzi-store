import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../product.model';
interface OrderProducts {
  quantity: number;
  product: Product;
}
@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  transform(products: Product[]): any {
    const orderProducts: OrderProducts[] = [];

    products.forEach( product => {
      
      const quantity = products.reduce((acum, element) => (product.id === element.id) ? acum + 1 : acum , 0);
      if (!orderProducts.some( ({ product: {id} }) => id === product.id )) {
        orderProducts.push({product, quantity});
      }
    });

    return orderProducts;
  }

}
