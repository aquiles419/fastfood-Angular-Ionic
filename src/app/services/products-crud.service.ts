import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products/Iproducts';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsCrudService {

  private readonly API = `${environment.API}products`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Products[]>(this.API)
  }
}
