import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthrizationService } from '../services/auth.service';
import { InstamojoserviceService } from '../services/instamojoservice.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  loginform: any;
  @ViewChild('f', { static: false }) loginForm!: NgForm;
  errors: string = "";

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
  SpResult: any;
  dataSource1: any;
  input: any;
  x: any;
  y: any;
  a: any;
  array:any;
  hidecart: any;
  product:any=[];
  grand: any = localStorage.getItem('totalprice');
  dataSource: any;
  rzp1: any;
  col: any;
  xyz:any = localStorage.getItem('totalprice'); 
  num:any=this.xyz * 100



  constructor(private mainservice: MainService, private fb: FormBuilder, private route: Router, private router: Router,private auth:InstamojoserviceService,public response:Http, public authservice: AuthrizationService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['checkout']);
    }
    // this.authservice.logout();
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
    // for (this.i = 0; this.i < this.tr.length; this.i++) {

    //   this.table = document.getElementById("tablelist");
    //   this.tr = this.table.getElementsByTagName("tr");
    //   this.tr.style.display = "none";
    // }
    this.cartService.getProducts().subscribe(res => {
  
      this.products = res;
       console.log("id",this.products)
      // for (let i = 0; i <= this.products.length; i++) {
      //   this.product.push(this.products[i]['pkWebSite_Test']);
      //   //  alert(JSON.stringify(this.product))
      // }
      console.log("totalprice:", this.grandTotal)
    })
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
  ondisplay() {
    this.x = document.getElementById('benificiary');
    if (this.x.style.display === "none") {
      this.x.style.display = "block";
    } else {
      this.x.style.display = "none";
    }

  }
  // login 
  login() {
    this.authservice.login(this.loginform.value.email, this.loginform.value.password)
      .subscribe(
        result => {
          if (result.result == 1) {
            this.router.navigate(['/checkout']);
          }
          else {
            alert("Login Fail")
          }
        },
        error => {
          alert("Login failed")
        });
    console.log(this.loginform.value.email)
  }
  onhide(z: any, x: any) {
    // alert(this.checkform.value.city);
    this.y = document.getElementById(z);
    this.a = document.getElementById(x);
    //  alert(this.y)
    if (this.y.style.display === "block" && this.a.style.display === "none") {
      this.y.style.display = "none";
      this.a.style.display = "block";
    } else {
      this.y.style.display = "block";
      this.a.style.display = "none";
    }
  }
  submit(x: any) {
    debugger
    this.WebSite_Product_PK();
    this.grandTotal = localStorage.getItem('totalprice');

    this.a = localStorage.getItem('setList')

    //  console.log(this.col );

    var MoObj: any = {};
    // this.isLoading = true;
    //expenses form li select ki pid hai.
    MoObj.Pid = "2ea650a8-ef10-4684-8426-6d669390be68";

    // MoObj.PinCode = this.checkform.value.city;
    // MoObj.Name = this.memberform.value.name;
    // MoObj.Gender = this.memberform.value.gender;
    // MoObj.Age = this.memberform.value.age;
    // MoObj.Address = this.detailform.value.address;
    // MoObj.MobNo = this.checkform.value.phone;
    // MoObj.Email = this.detailform.value.email;
    // MoObj.TotalAmount = this.grand;
    // MoObj.PaymentMode = x;
    // MoObj.Date = this.detailform.value.appoint;
    // MoObj.App_Time = this.detailform.value.slot;
    MoObj.OrderID = this.col;
    MoObj.FkTest = this.product;
    MoObj.TStatus = "pending";
    console.log(MoObj.OrderID)
    this.mainservice.TwoMethod(MoObj).then((value: any) => {
      this.SpResult = value;
      this.dataSource = this.SpResult.table;
      // this.isLoading = false;
      // alert(JSON.stringify(this.dataSource));
      // alert("submit")
      //  alert(JSON.stringify(this.SpResult));
      // console.log("get:", this.dataSource)
      alert("Test Booked Successfully!");
      this.route.navigate(['/home/']);
    });

    this.grandTotal = this.cartService.removeAllCart();
    if (x == "1") {
      this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
      // alert(this.xyz)
    }
    localStorage.removeItem('totalprice')
    localStorage.removeItem('setlist')
  }
  // grands: any = localStorage.getItem('totalprice')
  // num: any = this.grands * 100;
  // options = {

  //   "key": 'rzp_live_hPOwS1ZrGiHFrH', // Enter the Key ID generated from the Dashboard
  //   "amount": this.num, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //   "currency": "INR",
  //   "name": 'ocean software',
  //   "description": "Test Transaction",
  //   "image": "https://example.com/your_logo",
  //   "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   "callback_url": "https://localhost:4200",
  //   "webhook": "https://localhost:4200",
  //   "prefill": {
  //     "name": "Gaurav Kumar",
  //     "email": "phetal2000@gmail.com",
  //     "contact": "7028977456",
  //     "webhook": "https://localhost:4200/contact",
  //   },
  //   "notes": {
  //     "address": "Razorpay Corporate Office"
  //   },
  //   "theme": {
  //     "color": "#3399cc"
  //   }
  // };

  options = {
    "key": "rzp_live_hPOwS1ZrGiHFrH", // Enter the Key ID generated from the Dashboard
    "amount": this.num, // Amount is in currency subunits. Default currency is INR. Hence,50000 refers to 50000 paise
    "currency": "INR",
    "name": "ocean software",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://localhost:4000/webhook",
    "webhook":  "https://localhost:4000/webhook",   
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999",
        "webhook":" /webhook",
    },
    "notes": {
        "address": "Razorpay Corporate Office",
    },
    "theme": {
        "color": "#3399cc"
    }
  };
  option:any;

  pay(){
    this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
   this.rzp1.open();
   }

}
