import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/productModels';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

  deleteProduct(id) {
    this._productsService.deleteProduct(id);
  }

}
