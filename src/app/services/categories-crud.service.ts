import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../categories/Icategories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCrudService {

  private readonly API = `${environment.API}categories`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Categories[]>(this.API);
  }
}
