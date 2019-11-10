import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/productModels';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  productForm: FormGroup;
  @ViewChild(FormGroupDirective, { static: false }) formGroupDirective: FormGroupDirective;

  constructor(private _productsService: ProductsService, private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.invalid) {
      return;
    }
    this.product = <Product>this.productForm.value;
    this._productsService.addProduct(this.product).subscribe(response => {
      if (response) {
        //this.router.navigate(['/products']);
        this.openDialog();
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.product = new Product();
      this.formGroupDirective.resetForm();
    });
  }

}
