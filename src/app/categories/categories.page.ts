import { Component, OnInit } from '@angular/core';
import { CategoriesCrudService } from '../services/categories-crud.service';
import { Categories } from './Icategories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

    categories: Categories[];

  constructor(private service: CategoriesCrudService) { }

  ngOnInit() {
    this.service.list().subscribe(data => this.categories = data);
  }

} 
