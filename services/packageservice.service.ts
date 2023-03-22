import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackageModel } from '../models/packagedetails.model';


@Injectable({
  providedIn: 'root'
})
  
export class PackageserviceService {

  readonly rootUrl = 'https://localhost:5001/api/Package/';
  constructor(private http: HttpClient) {}

  GetPackageModels(): Observable<PackageModel[]> {
    return this.http.get<PackageModel[]>(this.rootUrl);
  }

  AddPackageModels(PackageModel: PackageModel): Observable<PackageModel> {
    return this.http.post<PackageModel>(this.rootUrl, PackageModel);
  }

  DeletePackageModel(id: number): Observable<PackageModel> {
    return this.http.delete<PackageModel>(this.rootUrl + id);
  }

  UpdatePackageModel(id: number, PackageModel: PackageModel): Observable<PackageModel> {
    return this.http.put<PackageModel>(this.rootUrl+ id, PackageModel);
  }

  GetPackageModelById(id: number): Observable<PackageModel> {
    return this.http.get<PackageModel>(this.rootUrl + '/api/Package' + id);
  }
}

