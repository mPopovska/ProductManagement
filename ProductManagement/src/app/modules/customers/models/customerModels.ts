import { Product } from '../../products/models/productModels';

export class Customer {
    id: string;
    name: string = "";
    email: string = "";
    purchasedProducts: Array<Product> = [];
}