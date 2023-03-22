import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import{JwtHelperService}from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="https://localhost:5001/api/User/";
  private userpayload:any;

  constructor(private http:HttpClient,private router:Router) { 
    this.userpayload=this.decodedToken();
  }

  register(userobj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}Login`,loginobj)
  }
  LogOut(){
    localStorage.clear();
    alert("Are you sure!")
    // localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }
  decodedToken(){
    const jwthelper=new JwtHelperService();
    const token=this.getToken()!;
    console.log(jwthelper.decodeToken(token))
    return jwthelper.decodeToken(token)
  }
  getfullnameFromToken(){
    if(this.userpayload)
    return this.userpayload.name;
  
  }
  getRoleFromToken(){
    if(this.userpayload)
    return this.userpayload.role;
  }
  

  }



