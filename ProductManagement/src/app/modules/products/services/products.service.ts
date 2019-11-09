import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/productModels';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dummyData = [{ id: Date.now().toString(), name: "Tomato1", price: 11 }, { id: (Date.now() + 1).toString(), name: "Tomato2", price: 12 }, { id: (Date.now() + 2).toString(), name: "Tomatooo", price: 13 }];
  productList: BehaviorSubject<Array<Product>> = new BehaviorSubject([]);
  // currentProduct = this.product.asObservable();

  constructor() { }


  loadProducts(): Observable<Array<Product>> {

    //http.get....
    let res = Observable.create(observer => {
      observer.next(this.dummyData);
      observer.complete();
    });

    res.subscribe(x => {
      console.log(x);
      this.productList.next(x);
    }).unsubscribe();


    return res;
  }

  addProduct(product: Product): Observable<Product> {

    let res =  Observable.create(observer => {
      observer.next({ ...product, id:Date.now().toString() });
      observer.complete();
    });
    res.subscribe(response => {
      this.dummyData.push(response);
      this.productList.next(this.dummyData);
    }).unsubscribe();
    return res;
  }

  deleteProduct(productId) {
    let index = this.dummyData.findIndex(product => product.id == productId);
    this.dummyData.splice(index, 1);
    console.log(this.dummyData)
    let res =  Observable.create(observer => {
      observer.next({  });
      observer.complete();
    });
    res.subscribe(response => {
      this.productList.next(this.dummyData);
    }).unsubscribe();
    return res;
  }

}
