import { Component , OnInit} from "@angular/core";
import { IProduct } from "./Product";
import { ProductService } from './product.service';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'List of Products';
    imageWidth: number = 50;
    imageMargin: number = 20;
    buttonText: string = 'Show Image';
    showImage: boolean = false;
    products: IProduct[] = [];

    _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];

  constructor (private productService: ProductService){
      //this.listFilter = 'cart';
  }

    ngOnInit(): void {
        console.log('this is on Init');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(title: string): void{
        this.pageTitle = title;
      }
    

    ToggleImage(): void{
        this.showImage = !this.showImage;
    }
}