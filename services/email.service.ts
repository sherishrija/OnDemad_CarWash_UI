import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  readonly rootUrl = 'https://localhost:5001/';
  constructor(private http: HttpClient) { }
  OrderPlacedEmail(orderlst: any) {
    return this.http.post(this.rootUrl + '/api/EmailProcess/EmailSendings', orderlst);
  }
  AdminConfirmedEmail(order: any) {
    return this.http.post(this.rootUrl + '/api/EmailProcess/AdminEmail/OrderConfirmation', order);
  // } SupplierMail(email: any) {
  //   return this.http.post(this.rootUrl + '/api/EmailProcess/SupplierMail/StockRelated', email);
  }

}
