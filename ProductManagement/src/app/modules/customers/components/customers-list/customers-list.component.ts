import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customerModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private _customersService: CustomersService, private router: Router) { }

  ngOnInit() {
    this._customersService.customerList.subscribe(s=>{
      console.log("from subscription",s);
      this.customers = [...s];
    });
    this._customersService.loadCustomers();
  }

  deleteCustomer(id) {
    this.router.navigate(['customer-details', id])
  }

}
