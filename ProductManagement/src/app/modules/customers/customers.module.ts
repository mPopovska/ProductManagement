import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomersListComponent } from './components/customers-list/customers-list.component';



@NgModule({
  declarations: [CustomerDetailsComponent, AddCustomerComponent, CustomersListComponent],
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
    ReactiveFormsModule
  ],
  exports: [
    CustomerDetailsComponent, AddCustomerComponent, CustomersListComponent
  ]
})
export class CustomersModule { }
