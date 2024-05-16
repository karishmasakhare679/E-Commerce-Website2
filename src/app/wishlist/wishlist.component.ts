import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  showMe:boolean=false;
  dataSource :any;
  SpResult: any;
  product_origin_price: any;
  productName:any;
  isLoading:boolean = true;
  
  constructor(private cartService:CartService, private mainService:MainService) { }

  ngOnInit(): void {
    this.productName = localStorage.getItem('setList');
    var MoObj: any = {};

    //all product 
    MoObj.Pid = "8a1645d5-e867-450b-9168-30dfbf20a395";
    this.isLoading = true;
    MoObj.PkWebSite_Product = this.productName;
    this.mainService.TwoMethod(MoObj).then(value => {
      this.SpResult = value;
      this.dataSource = this.SpResult.table;
      this.dataSource[0]['qty'] = 1
      this.product_origin_price = this.dataSource[0].totalPrice
      this.isLoading = false;
      console.log(this.SpResult);
      console.log("get:", this.dataSource)
    });
  }

  addtocart(col: any) {
    console.log(col)
    this.cartService.addtoCart(col);
  }


  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
