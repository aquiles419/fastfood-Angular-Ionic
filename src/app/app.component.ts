import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Produtos', url: '/products', icon: 'fast-food' },
    { title: 'Categorias', url: '/categories', icon: 'list' },
    { title: 'Carrinho', url: '/cart', icon: 'cart' },
  ];

  constructor() {}
}
