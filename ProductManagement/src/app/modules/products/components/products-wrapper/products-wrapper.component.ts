import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/productModels';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.css']
})
export class ProductsWrapperComponent implements OnInit {

  products: Product[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    //Store.sub...

    this._productsService.productList.subscribe(s=>{
      console.log("from subscription",s);
      this.products = [...s];
    });
    this._productsService.loadProducts();
  }

}
