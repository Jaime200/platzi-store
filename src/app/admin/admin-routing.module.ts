import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


const routes: Routes = [
  
  {
    path:'',
    component: NavComponent,
    children: [
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path:'products/create',
        component: FormProductComponent
      },
      {
        path:'products/edit/:id',
        component: EditProductComponent
      },
      {
        path:'table-Products',
        component: TableProductsComponent
      },
      {
        path:'products',
        component: ProductsListComponent
      }
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
