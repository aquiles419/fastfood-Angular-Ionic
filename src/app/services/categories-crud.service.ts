import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categories } from '../categories/Icategories';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCrudService {

  private readonly API = 'http://localhost:3333/v1/categories'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Categories[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
