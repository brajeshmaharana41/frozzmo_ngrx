import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonApiService } from "../common.service";
import { CartResponce, Delete_Item } from "./cart_module";
import { Brand, Category, Color, Price_mini_max, Product, ProductResponce } from "./market_modal";
@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor (private http : HttpClient, private apiservices: CommonApiService) {
    }

    getAllProducts(params : any): Observable<ProductResponce> {
        return this.http.get<ProductResponce>(this.apiservices.List_All_Products, {
            params: params
        })
    }
    getCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiservices.ALL_CATEGORIES)
    }
         
    getBrand(): Observable<Brand[]> {
        return this.http.get<Brand[]>(this.apiservices.ALL_BRANDS)
    }

    getColors(): Observable<Color[]> {
        return this.http.get<Color[]>(this.apiservices.ALL_COLORS)
    }

    get_Mini_Max(): Observable<Price_mini_max[]> {
        return this.http.get<Price_mini_max[]>(this.apiservices.ALL_Price)
    }

    get_prod_details(id : any): Observable<Product>{
        return this.http.get<Product>(`${this.apiservices.List_All_Products}/${id}`)
    }

    cart_data(): Observable<CartResponce>{
        return this.http.get<CartResponce>(this.apiservices.Cart_Data)
    }

    delete_data(id : any): Observable<Delete_Item>{
        return this.http.get<Delete_Item>(`${this.apiservices.Delete_Cart}${id}`)
    }

}