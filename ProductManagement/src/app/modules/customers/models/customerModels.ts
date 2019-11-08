import { ProductsModule } from '../../products/products.module';

export class Customer {
    id: string;
    name: string = "";
    email: string = "";
    purchasedProducts: Array<ProductsModule> = [];
}