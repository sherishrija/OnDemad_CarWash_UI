import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {
  readonly rootUrl = 'https://localhost:5001/api/Order/';
  constructor(private http: HttpClient) {}

  GetOrderModels(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.rootUrl);
  }

  AddOrderModels(OrderModel: OrderModel): Observable<OrderModel> {
     return this.http.post<OrderModel>(this.rootUrl, OrderModel);
   }

  // DeleteOrderModel(id: number): Observable<OrderModel> {
  //   return this.http.delete<OrderModel>(this.rootUrl + id);
  // }

  // UpdateOrderModel(id: number, OrderModel: OrderModel): Observable<OrderModel> {
  //   return this.http.put<OrderModel>(this.rootUrl+ id, OrderModel);
  // }

  // GetOrderModelById(id: number): Observable<OrderModel> {
  //   return this.http.get<OrderModel>(this.rootUrl + '/api/Order' + id);
  // }
}
