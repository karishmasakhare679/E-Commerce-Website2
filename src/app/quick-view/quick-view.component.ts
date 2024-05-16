import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MainService } from '../services/main.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {

  Id: any;
  isLoading: boolean = false;
  ApiResult: any;
  dataSource: any;
  getform: any;
  SpResult: any;
  selectedData: any;
  table: any;
  cards: any;
  product_origin_price:any ;
  
  bestselling: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    // nav: true
  }

  constructor(private route: Router, private mainService: MainService, private cartService: CartService) { }

  ngOnInit(): void {
    this.Id = localStorage.getItem('setList');
    var MoObj: any = {};
    this.isLoading = true;
    MoObj.PkWebSite_Product = this.Id;

    //all product 
    MoObj.Pid = "8a1645d5-e867-450b-9168-30dfbf20a395";

    this.mainService.TwoMethod(MoObj).then(value => {
      this.SpResult = value;
      this.dataSource = this.SpResult.table;
      this.dataSource[0]['qty'] = 1;
      this.product_origin_price = this.dataSource[0].totalPrice
      this.isLoading = false;
      console.log(this.SpResult);
      console.log("get:", this.dataSource)
    });
    
  }
  book(u: any) {
    // debugger
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/my_cart/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display = 'none';
    console.log(this.table)
  }
  select(u: any) {
    // debugger
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/wishlist/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display = 'none';
    console.log(this.table)
  }
  WebSite_Product_BestSeller() {
    var MoObj: any = {}
    MoObj.Pid = "c2c687c1-65d6-4bda-b954-9b4111d52f06";
    MoObj.productName = "";
    MoObj.mrp = "";
    this.mainService.TwoMethod(MoObj).then(value => {
      this.ApiResult = value;
      this.ApiResult = this.ApiResult.table;
      console.log(this.ApiResult);
    });
  }
  addtocart(item: any) {
    console.log(item)
    this.cartService.addtoCart(item);
    this.route.navigate(['/home/']);
  }

  increase(quantity: any) {
    if (quantity >= 0) {
      let inc = this.dataSource[0].qty + 1
      this.dataSource[0].qty = inc
      this.dataSource[0].totalPrice = this.dataSource[0].totalPrice + this.product_origin_price
    }
  }
  decrease(quantity: any) {
    if (quantity > 0) {
      let inc = this.dataSource[0].qty - 1
      this.dataSource[0].qty = inc
      this.dataSource[0].totalPrice = this.dataSource[0].totalPrice - this.product_origin_price
    }
  }

}
