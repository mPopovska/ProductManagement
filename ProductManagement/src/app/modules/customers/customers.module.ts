import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';



@NgModule({
  declarations: [CustomerDetailsComponent, AddCustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
