import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/products.json')
  }
}
