import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customerModels';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  id: string;
  currentCustomer: Customer = new Customer();
  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource(this.currentCustomer.purchasedProducts);
  
  constructor(private route: ActivatedRoute, private router: Router, private _customersService: CustomersService) { 
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getCustomerDetails(this.id);
    });
  }

  ngOnInit() {
  }

  getCustomerDetails(id) {
    this._customersService.getCustomerDetails(id).subscribe(c => {
      this.currentCustomer = {...c};
    }).unsubscribe();
  }

}
