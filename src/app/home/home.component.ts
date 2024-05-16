import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart.service';
import { style } from '@angular/animations';
import { NgxUiLoaderService } from 'ngx-ui-loader';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  SpecialOffers: OwlOptions = {
    navText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    autoplaySpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
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
  bestselling: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    autoplayHoverPause:true,
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
  slider: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  SpResult: any;
  ApiResult: any;
  table: any;
  table2: any;
  list: any;
  selectedData:any;
  cards:any;
  ApiResult1 :any;
  public totalItem: number = 0;
  hidecart: any;
  isLoading: boolean= false;
  


  constructor(private mainservice: MainService,private route: Router, private router: Router, private cartService: CartService,private ngxLoader: NgxUiLoaderService ) { }
  showLoader() {
    this.ngxLoader.start(); // Start the loader
  }

  hideLoader() {
    this.ngxLoader.stop(); // Stop the loader
  }

  ngOnInit(): void {
    this.showLoader();
    // this.isLoading=true;
    this.WebSite_HomePageSlider_ShowOnHome();
    this.WebSite_Product_BestSeller();
    this.WebSite_Product_Soffer();
    this.hideLoader();
  }
  WebSite_HomePageSlider_ShowOnHome() {
    this.showLoader();
      this.isLoading = true;
    var MoObj: any = {}
    MoObj.Pid = "3d2d5877-2805-4e01-a0c9-b75795c4d0d7";
    MoObj.pkWebSite_HomePageSlider = "";
    this.mainservice.TwoMethod(MoObj).then(value => {
      this.SpResult = value;
      this.SpResult = this.SpResult.table;
       this.isLoading = false;
      this.hideLoader();
    });
  }
  WebSite_Product_BestSeller() {debugger
    this.isLoading=true;
    var MoObj: any = {}
    MoObj.Pid = "c2c687c1-65d6-4bda-b954-9b4111d52f06";
    this.mainservice.TwoMethod(MoObj).then(value => {debugger
      this.ApiResult1 = value;
      this.ApiResult1 = this.ApiResult1.table;
      console.log(this.ApiResult1);
      this.isLoading =false;
    });
  }
  WebSite_Product_Soffer() {
    this.isLoading=true;
    var MoObj: any = {}
    MoObj.Pid = "7241f258-0de8-41bf-9753-00bfc7a179ef";
    this.mainservice.TwoMethod(MoObj).then(value => {
      this.ApiResult = value;
      this.ApiResult = this.ApiResult.table;
      this.isLoading=false;
    });
  }
  something:any;
  RowSelected(u: any, v:any) {
    // debugger
    this.something= v;
    this.selectedData = u;
    localStorage.setItem('image', this.something);
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/discription/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display='none';   
    console.log(  this.table)
  }
  RowSelected1(u: any) {
    // debugger
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/quick_view/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display='none';   
    console.log(  this.table)
  }
  RowSelect(u: any) {
    // debugger
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/my_cart/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display='none';   
    console.log(  this.table)
  }
  addtocart(item: any) {
    console.log(item)
    this.cartService.addtoCart(item);
  }

  WebSite_Category_Select_List_ByPk(){
    
  }

  productList() {
      this.router.navigate(["/wishlist"]);
      this.hidecart.style.display = "block";
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
    console.log(this.table);
    alert("product added successfully");
  }
  
}         
