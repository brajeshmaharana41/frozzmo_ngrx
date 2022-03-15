import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  

  public readonly API_ENDPOINT: string = `http://192.168.1.3:3000`;

  public readonly Auth_API_ENDPOINT: string = `https://app-api-user-bff-centralus-dev-001.azurewebsites.net/api`;  

  public readonly SIGN_UP: string = this.API_ENDPOINT + `/auth/signUp`;

  public readonly ALL_CATEGORIES: string = this.API_ENDPOINT + `/category/minilist`;

  public readonly ALL_BRANDS: string = this.API_ENDPOINT + `/brand/minilist`;

  public readonly ALL_COLORS: string = this.API_ENDPOINT + `/color/minilist`;

  public readonly ALL_Price: string = this.API_ENDPOINT + `/pricerange/minilist`;

  public readonly List_All_Products: string = this.API_ENDPOINT + `/product`;

  public readonly Cart_Data: string = this.API_ENDPOINT + `/cart`;

  public readonly Add_Cart: string = this.API_ENDPOINT + `/cart/add`;

  public readonly Delete_Cart: string = this.API_ENDPOINT + `/cart/delete/`;

  constructor() { }
}
