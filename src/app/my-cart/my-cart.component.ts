import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { InstamojoserviceService } from '../services/instamojoservice.service';
import { MainService } from '../services/main.service';
import { mycart, OrderDetailsItem } from './my-cart';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  orderDetails=  new OrderDetailsItem;
  mycartobject= new mycart;
  grandTotal: any;
  public totalItem: number = 0;
  products: any;
  table: any;
  cards: any;
  tr: any;
  td: any;
  i: any
  txtValue: any;
  Id: any;
  SpResult1: any;
  dataSource1: any;
  a: any;
  b: any;
  arr: any = {};
  id: any = "id";
  quty: any = "quantity"
  arr2: any = [];
  ApiResult: any;
  datasource: any;
  constructor(private mainservice: MainService, private route: Router, private auth: InstamojoserviceService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log("product :", this.products)

        this.grandTotal = this.cartService.getTotalPrice();
        console.log("total:", this.grandTotal)
        localStorage.setItem('totalprice', this.grandTotal)
      })
    for (this.i = 0; this.i < this.tr.length; this.i++) {

      this.table = document.getElementById("tablelist");
      this.tr = this.table.getElementsByTagName("tr");
      this.tr.style.display = "none";
    }
    // this.show()
  }

  show() {
    this.mycartobject.UserName = "nilesh"
     console.log(this.mycartobject)
      console.log(this.products)
   this.products.forEach((ele: any) => { 
   this.orderDetails =  new OrderDetailsItem;
   this.orderDetails.PID = ele.id
   this.orderDetails.Quantity = ele.quantity
   console.log(this.orderDetails)
   this.mycartobject.OrderDetailsItem.push(this.orderDetails)
      }); 
    console.log(this.mycartobject)
  }
  WebSite_OrderInfo_OrderDetails_Insert() {

    this.show() 
    console.log(this.mycartobject)
    this.mycartobject['Pid'] = "6b0af835-1e8a-40d5-a876-1f5fe20fc557"
    this.mainservice.TwoMethod(this.mycartobject).then((value: any) => {
      this.ApiResult = value;
      console.log(this.ApiResult);
      this.datasource = this.ApiResult.table;

      alert(JSON.stringify(this.datasource));
    });
  }

  WebSite_Product_PK() {
    this.Id = localStorage.getItem('setList');
    var MoObj: any = {};
    MoObj.PkWebSite_Product = this.Id;
    MoObj.Pid = "8a1645d5-e867-450b-9168-30dfbf20a395";
    this.mainservice.TwoMethod(MoObj).then((value: any) => {
      this.SpResult1 = value;
      this.dataSource1 = this.SpResult1.table;
      console.log(this.SpResult1);
      console.log("get:", this.dataSource1)
    });
  }
  grands: any = localStorage.getItem('totalprice')
  num: any = this.grands * 100;
  options = {

    "key": 'rzp_live_hPOwS1ZrGiHFrH', // Enter the Key ID generated from the Dashboard
    "amount": this.num, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": 'ocean software',
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://localhost:4200",
    "webhook": "https://localhost:4200",
    "prefill": {
      "name": "Gaurav Kumar",
      "email": "phetal2000@gmail.com",
      "contact": "7028977456",
      "webhook": "https://localhost:4200/contact",
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

}

