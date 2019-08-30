import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})

export class StoreComponent {
  public selectedCategory = null;
  public productsPerpage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerpage;
    return this.repository.getProducts(this.selectedCategory)
               .slice(pageIndex, pageIndex + this.productsPerpage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerpage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerpage);
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerpage)).fill(0).map((x, i) => i + 1);
  // }
}
