import { IProduct } from "./Product";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: IProduct[];
    //  = [
    //     {
    //         "productId": 1,
    //         "productName": "Leaf bag",
    //         "productCode": "GDN-0011",
    //         "releaseDate": "March 19, 2016",
    //         "description": "Leaf rake with 48-inch wooden handle.",
    //         "price": 19.95,
    //         "starRating": 3.2,
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //       },
    //       {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2016",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": 32.99,
    //         "starRating": 4.2,
    //         "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //       }

    // ];

    private productUrl: string = 'api/products/products.json';

    constructor(private http : HttpClient) {

    }

    getProducts(): Observable<IProduct[]> { //this method returns an observable of Iproduct array

        return this.http.get<IProduct[]>(this.productUrl);
        //return this.products;
    }

}