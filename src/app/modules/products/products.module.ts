import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { DecimalPlacesDirective } from './decimal-places.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';



@NgModule({
  declarations: [ProductsWrapperComponent, ProductsGridComponent, ProductsListComponent, AddProductComponent, DecimalPlacesDirective, DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    ProductsWrapperComponent,
    ProductsGridComponent,
    ProductsListComponent,
    AddProductComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent]
})
export class ProductsModule { }
