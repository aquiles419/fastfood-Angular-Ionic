import { Component, OnInit } from '@angular/core';
import { ProductsCrudService } from '../services/products-crud.service';
import { Products } from './Iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Products[];

  constructor(private service: ProductsCrudService) { }

  ngOnInit() {
    this.service.list().subscribe(data => this.products = data);
  }

}
