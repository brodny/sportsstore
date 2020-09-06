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

  // tslint:disable-next-line: no-inferrable-types
  public productsPerPage: number = 4;
  // tslint:disable-next-line: no-inferrable-types
  public selectedPage: number = 1;

  constructor(private repository: ProductRepository) { }

  ngOnInit(): void {
  }

  public get products(): Product[] {
    const pageIndex: number = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  public get categories(): string[] {
    return this.repository.getCategories();
  }

  public changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }

  public changePage(newPage: number): void {
    this.selectedPage = Number(newPage);
  }

  public changePageSize(newSize: number): void {
    this.productsPerPage = Number(newSize);
  }

  public get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }
}
