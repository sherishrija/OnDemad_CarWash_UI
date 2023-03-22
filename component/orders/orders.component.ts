import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent {
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

  //set values to the drug
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

  onAcceptOrder(id: number) {

    this.updateOrder = this.orders.filter(item => item?.id === id)[0]
    console.log('UPDATE ORDER', this.updateOrder)
    this.order.UpdateOrderModel(id, { ...this.updateOrder, status: "Accepted" }).subscribe(data => {
      this.getAllOrders()
      this.updateOrder = {
        id: 0,
        washingInstructions: '',
        date: '',
        status: '',
        packageName: '',
        name: '',
        price: 0,
        city: '',
        pincode: 0,
      }
    })
  }

  



 


  LogOut() {
    localStorage.removeItem('');
  }
}


