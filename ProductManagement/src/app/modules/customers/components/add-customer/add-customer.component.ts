import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../models/customerModels';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  customerForm: FormGroup;
  @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective;

  constructor(private _customersService: CustomersService, private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addCustomer() {
    if (this.customerForm.invalid) {
      return;
    }
    this.customer = <Customer>this.customerForm.value;
    this._customersService.addCustomer(this.customer).subscribe(response => {
      if (!!response) {
        this.router.navigate(['/customers']);
      }
    });
  }

}
