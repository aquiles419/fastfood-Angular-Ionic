import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Products } from '../products/Iproducts';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsCrudService {

  private readonly API = 'http://localhost:3333/v1/products'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Products[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
