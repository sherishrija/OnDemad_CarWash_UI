import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    readonly rootUrl = 'https://localhost:5001/api/Order/';
    constructor(private http: HttpClient) { }



}
