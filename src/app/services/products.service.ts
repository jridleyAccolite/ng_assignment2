import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public httpClient: HttpClient) { }

  // uses dummy data of product list
  getProducts(){
    return this.httpClient.get('https://dummyjson.com/products').pipe(
      map((data:any) => data.products)  // map parses data
    );
  }
}
