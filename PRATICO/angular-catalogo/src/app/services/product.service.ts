import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Produto A', description: 'Descrição do Produto A' },
    { id: 2, name: 'Produto B', description: 'Descrição do Produto B' },
    { id: 3, name: 'Produto C', description: 'Descrição do Produto C' }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}