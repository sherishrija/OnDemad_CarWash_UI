import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  public role!: string;

  public orders: OrderModel[] = [];

  orderL: OrderModel = {
    id: 0,
    washingInstructions: '',
    date: '',
    status: '',
    packageName: '',
    name: '',
    price: 0,
    city: '',
    pincode: 0,
  };

  updateOrder: OrderModel = {
    id: 0,
    washingInstructions: '',
    date: '',
    status: '',
    packageName: '',
    name: '',
    price: 0,
    city: '',
    pincode: 0,
  };

  constructor(
    private auth: AuthService,
    private order: OrdersService,
    private router: Router,
    private userStore: UserStoreService
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken;
      })
  }

  //set values
  SetPackageValues(order: OrderModel) {
    (this.orderL.id = order.id),
      (this.orderL.washingInstructions = order.washingInstructions),
      (this.orderL.date = order.date),
      (this.orderL.status = order.status),
      (this.orderL.packageName = order.packageName),
      (this.orderL.price = order.price),
      (this.orderL.city = order.city),
      (this.orderL.pincode = order.pincode);


  }

  //Method to display all 
  getAllOrders() {
    this.order.GetOrderModels().subscribe((response) => {
      this.orders = response;
    });
  }

  



 


  LogOut() {
    localStorage.removeItem('');
  }
}



