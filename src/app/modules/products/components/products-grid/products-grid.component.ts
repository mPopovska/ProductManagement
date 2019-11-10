import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/productModels';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() products: Product[] = [];
  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource = new MatTableDataSource(this.products);

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

  deleteProduct(id) {
    this._productsService.deleteProduct(id);
  }

}
