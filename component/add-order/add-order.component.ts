import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { PackageModel } from 'src/app/models/packagedetails.model';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import { PackageService } from 'src/app/services/package.service';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email.service';

import { OrdersService } from 'src/app/services/orders.service';

interface Package {
  id: number,
  name: string,
  price: string;
  status: string;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  InvoiceEmailList:OrderModel[]=[];
  public orders: OrderModel[] = [];
  public packages: OrderModel[] = [];
  id: any;
  userString: any
  userData: any
 
  public orderL: OrderModel = {
    id: 0,
    washingInstructions: '',
    date: '',
    status: 'Pending',
    packageName: '',
    name: '',
    price: 0,
    city: '',
    pincode: 0,

  };

  public packL: PackageModel = {
    id: 0,
    name: '',
    price: '',
    status: 'Pending',
  };

  constructor(
    private pack: OrderdetailsService,
    private ordersList: OrdersService,
    private router: Router,
    private route: ActivatedRoute,
    private Package: PackageService,
    private toastr: ToastrService,
    private email: EmailService
  ) {
    this.route.params.subscribe(params => {
      console.log('params', params)
      this.id = params['id']
    })
  }

  ngOnInit(): void {
   
    this.Package.getPackagebyId(this.id).subscribe(data => {

      
      console.log('ORDER', this.orderL)

      console.log('PACKAGE DATA', data)
     

      this.orderL = { ...this.orderL, ...data }

      

      console.log('ORDER', this.orderL)


    }, error => console.log(error));
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
 

  //Method to display
  getAllOrders() {
    this.pack.GetOrderModels().subscribe((data) => {
      this.orders = data;
      console.log('1 GET ORDERS', data)

    


      window.location.href = `/order/${data[data?.length - 1]?.id}`;
      alert("order placed");
      
    });
  }

  
  

  //Method to add car
  onSubmit() {
    console.log('SUBMIT', this.orderL);
    this.pack.AddOrderModels({ ...this.orderL, packageName: this.orderL.name }).subscribe((data) => {
      console.log('ADD ORDER RESPONSE', data);
      this.getAllOrders();
     // alert('Order has been placed')
     
    }, (error) => console.log('ADD ORDERS ERROR', error))
    
  }

  LogOut() {
    localStorage.removeItem('');
  }
}
