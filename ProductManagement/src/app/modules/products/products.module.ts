import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [ProductsWrapperComponent, ProductsGridComponent, ProductsListComponent, AddProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
