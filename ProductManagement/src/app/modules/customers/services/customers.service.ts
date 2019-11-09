import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/customerModels';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private dummyData = [{ id: Date.now().toString(), name: "Customer1", email: "11@gmail.com", purchasedProducts: [{ id: Date.now().toString(), name: "Tomato1", price: 11 }] },
  { id: (Date.now() + 1).toString(), name: "Customer2", email: "22@gmail.com", purchasedProducts: [{ id: (Date.now() + 1).toString(), name: "Tomato1", price: 11 }] },
  { id: (Date.now() + 2).toString(), name: "Customer3", email: "33@gmail.com", purchasedProducts: [{ id: (Date.now() + 2).toString(), name: "Tomato1", price: 11 }] }];
  customerList: BehaviorSubject<Array<Customer>> = new BehaviorSubject([]);
  customer: BehaviorSubject<Customer> = new BehaviorSubject(new Customer());
  currentCustomer: Customer;

  constructor() { }

  loadCustomers(): Observable<Array<Customer>> {
    let res = Observable.create(observer => {
      observer.next(this.dummyData);
      observer.complete();
    });

    res.subscribe(x => {
      this.customerList.next(x);
    });
    return res;
  }

  addCustomer(customer: Customer): Observable<Customer> {

    let res = Observable.create(observer => {
      observer.next({ ...customer, id: '1' });
      observer.complete();
    });
    res.subscribe(response => {
      this.dummyData.push(response);
      this.customerList.next(this.dummyData);
    }).unsubscribe();
    return res;
  }

  getCustomerDetails(id) {
    this.currentCustomer = this.dummyData.find(c => c.id == id) as Customer;
    let res = Observable.create(observer => {
      observer.next(this.currentCustomer);
      observer.complete();
    });
    res.subscribe(response => {
      this.customer.next(this.currentCustomer);
    });
    return res;
  }
}
