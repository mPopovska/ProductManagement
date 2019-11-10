import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsWrapperComponent } from './modules/products/components/products-wrapper/products-wrapper.component';
import { AddProductComponent } from './modules/products/components/add-product/add-product.component';
import { CustomerDetailsComponent } from './modules/customers/components/customer-details/customer-details.component';
import { CustomersListComponent } from './modules/customers/components/customers-list/customers-list.component';
import { AddCustomerComponent } from './modules/customers/components/add-customer/add-customer.component';
import { AuthGuard } from './modules/login/guards/auth-guard.service';
import { LoginComponent } from './modules/login/components/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsWrapperComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    component: CustomersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer-details/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
