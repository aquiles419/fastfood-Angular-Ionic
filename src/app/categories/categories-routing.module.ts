import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

import api from '../../services/api'

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  }
];

const teste = api.get("categories")

      .then((response) => (response.data)) 
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
     console.log(teste)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class CategoriesPageRoutingModule {}
