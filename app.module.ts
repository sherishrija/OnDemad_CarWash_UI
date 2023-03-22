import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { CarComponent } from './component/car/car.component';
import { PackagesComponent } from './component/packages/packages.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PackageComponent } from './component/package/package.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AddOrderComponent } from './component/add-order/add-order.component';

import { ToastrModule } from 'ngx-toastr';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailsComponent } from './component/order-details/order-details/order-details.component';













@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    FooterComponent,
    NavbarComponent,
    CarComponent,
    PackagesComponent,
    UserdetailsComponent,
    PackageComponent,
   
    OrdersComponent,
    AddOrderComponent,
    OrderComponent,
    OrderDetailsComponent,

    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
