import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  readonly rootUrl = 'https://localhost:5001/api/User/';
  constructor(private http: HttpClient) {}

  GetUserModels(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.rootUrl);
  }

  GetUserModelById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.rootUrl + '/api/User' + id);
  }
  // AddUserModels(UserModel: UserModel): Observable<UserModel> {
  //   return this.http.post<UserModel>(this.rootUrl+'register', UserModel);
  // }

  DeleteUserModel(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(this.rootUrl + id);
  }

  UpdateUserModel(id: number, UserModel: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(this.rootUrl+ id, UserModel);
  }

}



