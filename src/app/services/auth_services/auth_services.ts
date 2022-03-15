import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonApiService } from "../common.service";
import { SignUP } from "./auth_module";

@Injectable({
    providedIn: 'root'
})

export class AuthServices {
    
    constructor (private http : HttpClient, private authapiservices: CommonApiService) {
    
    }

    
    SignUpApi(): Observable<SignUP> {
        return this.http.post<SignUP>(this.authapiservices.SIGN_UP, {
        })
    }

}