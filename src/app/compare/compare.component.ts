import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  ApiResult: any;
  hidecart: any;
  
  constructor(private mainservice: MainService,private route: Router, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.WebSite_Product_Soffer();
  }
  WebSite_Product_Soffer() {
    var MoObj: any = {}
    MoObj.Pid = "7241f258-0de8-41bf-9753-00bfc7a179ef";
    MoObj.productName = "";
    MoObj.mrp = "";
    this.mainservice.TwoMethod(MoObj).then(value => {
      this.ApiResult = value;
      this.ApiResult = this.ApiResult.table;
    });
  }
  addtocart(item: any) {
    console.log(item)
    this.cartService.addtoCart(item);
  }
  hide() {
    this.hidecart = document.getElementById('cart');
    this.hidecart.style.display = "block";
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
