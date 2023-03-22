import { HttpClient } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CarModel } from '../models/car.model';

import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly rootUrl = 'https://localhost:5001/api/Car/';
  constructor(private http: HttpClient) {}

  GetCarModels(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.rootUrl);
  }

  AddCarModels(CarModel: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>(this.rootUrl, CarModel);
  }

  DeleteCarModel(id: number): Observable<CarModel> {
    return this.http.delete<CarModel>(this.rootUrl + id);
  }

  UpdateCarModel(id: number, CarModel: CarModel): Observable<CarModel> {
    return this.http.put<CarModel>(this.rootUrl+ id, CarModel);
  }

  GetCarModelById(id: number): Observable<CarModel> {
    return this.http.get<CarModel>(this.rootUrl + '/api/Car' + id);
  }
}


 
