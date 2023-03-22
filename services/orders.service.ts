import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/orders.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  readonly rootUrl = 'https://localhost:5001/api/Order/';
  constructor(private http: HttpClient) { }

  GetOrderModels(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.rootUrl);
  }

  GetOrderModelById(id: number): Observable<OrderModel> {
    return this.http.get<OrderModel>(this.rootUrl + id);
  }

  SendOrderEmail(id: number, UserModel: UserModel): Observable<UserModel> {

    return this.http.post<UserModel>(this.rootUrl + id, UserModel)
  }

  UpdateOrderModel(id: number, OrderModel: OrderModel): Observable<OrderModel> {
    return this.http.put<OrderModel>(this.rootUrl + id, OrderModel);
  }

  // AddOrderModels(OrderModel: OrderModel): Observable<OrderModel> {
  //   return this.http.post<OrderModel>(this.rootUrl, OrderModel);
  // }

  // DeleteOrderModel(id: number): Observable<OrderModel> {
  //   return this.http.delete<OrderModel>(this.rootUrl + id);
  // }

}


