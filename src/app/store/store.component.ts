import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less']
})
export class StoreComponent implements OnInit {

  public selectedCategory: string = null;

  constructor(private repository: ProductRepository) { }

  ngOnInit(): void {
  }

  public get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  public get categories(): string[] {
    return this.repository.getCategories();
  }

  public changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }
}
