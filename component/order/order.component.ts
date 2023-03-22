import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderModel } from 'src/app/models/orders.model';
import { OrdersService } from 'src/app/services/orders.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  @Input()
  singleOrder: OrderModel = {
    id: 0,
    washingInstructions: '',
    date: '',
    status: 'Pending',
    packageName: '',
    name: '',
    price: 0,
    city: '',
    pincode: 0,
  }
  id: any;
  printContents: any;
  originalContents: any;
  userString: any
  userData: any

  constructor(
    private route: ActivatedRoute,
    private order: OrdersService,
    private ordersList: OrdersService,
    private user: UserdetailsService,
  ) {
    this.route.params.subscribe(params => {
      console.log('params', params)
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getOrder()
  }



  getOrder() {
    const id = this.id;

    this.userString = localStorage.getItem('user')
   // this.userData = JSON.parse(this.userString)
    this.ordersList.SendOrderEmail(id, this.userData).subscribe((data) => {
      console.log('SEND ORDER EMAIL RESPONSE', data)
    })

    this.order.GetOrderModelById(id).subscribe(data => {
      console.log('SINGLE ORDER', data)

      this.singleOrder = { ...this.singleOrder, ...data }

    }, error => console.log(error))
  }



  DownloadOrder(cmpName: any) {
    // this.printContents = document.getElementById(cmpName).innerHTML;
    // this.originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;

   window.print();

    // document.body.innerHTML = originalContents;
  }

  LogOut() {
    localStorage.removeItem('');
  }

}