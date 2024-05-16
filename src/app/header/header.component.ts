import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MainService } from '../services/main.service';
import { AuthrizationService } from '../services/auth.service';





// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { FileUploader } from 'ng2-file-upload';


const URL = "https://serverengg.oceansofttech.net/api/zion/UPLOAD";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  username: any;
  DropdownLIst: any;
  SubDropdownLIst: any;
  MultiDropdownLIst: any;
  ProdInsert: any;
  DropdownLIsts: any;
  SubDropdownLIstid: any;
  ProdDetails: any;
  ProdList: any;
  ProdListId: any;
  dataSource: any;
  dataSource1: any;
  searchform!: FormGroup;
  SpResult: any;
  SpResult1: any;
  input: any;
  filter: any;
  table: any;
  cards: any;
  tr: any;
  td: any;
  i: any
  txtValue: any
  Id: any;
  // searchText!: string;
  searchText: string = '';

  id: any;
  selectedData: any;
  grandTotal: any;
  public totalItem: number = 0;
  products: any;
  hidecart: any;
  ProductForm: any;
  isLoading: boolean = true;

  // code for self using and  this code for product list//
  something: any;
  openProductPage(u: any, v: any) {
    debugger
    // Navigate to another page using the product id
    this.something = v;
    this.selectedData = u;
    localStorage.setItem('image', this.something);
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    // Navigate to another page using the product id
    this.route.navigate(['/discription/',]);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display = 'none';
    console.log(this.table)

   }


  
  // code for self using//




  constructor(private mainService: MainService, private authservice: AuthrizationService, private route: Router, private fb: FormBuilder, private cartService: CartService) {
    this.username = localStorage.getItem('email');
    // this.WebSite_Prod_Category_Select_FkWebSiteSub_Category(this.ProdList) 
  }

  ngOnInit(): void {
    // this.showLoader();
     this.isLoading = true;
    this.searchform = this.fb.group({
      Id: new FormControl('')
    })
    
   
    this.WebSite_Category_DDL();
    // this.WebSite_Prod_Category_Select_FkWebSiteSub_Category();
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
    
  }

  logout(): void {
    this.authservice.logout();
    localStorage.removeItem('username');
    
  }
  WebSite_Category_DDL() {
    const MoObj: any = {};
    MoObj.Pid = '34e77aee-f7c6-46fc-98b3-f068b41df8cc';
    this.mainService.TwoMethod(MoObj).then(value => {
      this.DropdownLIst = value;
      this.DropdownLIst = this.DropdownLIst.table;
      this.DropdownLIsts = this.DropdownLIst[0].id;
      console.log(this.DropdownLIst);
      // console.log(this.DropdownLIst)
    });
    
  }

  hide() {
    if (this.totalItem > 0) {
      this.route.navigate(["/my_cart"])
    }
    // else{
    //   this.route.navigate(["/header"])
    // }
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
    this.mainService.TwoMethod(MoObj).then((value: any) => {
      this.SpResult1 = value;
      this.dataSource1 = this.SpResult1.table;
      console.log(this.SpResult1);
      console.log("get:", this.dataSource1)
    });
  }


  //// for subproduct Data Details/////
  WebSite_Product_Select_List_ByPk() {
    debugger //select 
    const MoObj: any = {};
    MoObj.Pid = "14ff19f9-48b9-4492-bbf3-93479a846cec";
    MoObj.PkWebSite_Product = 0; //expenses form li select ki pid hai.
    this.mainService.TwoMethod(MoObj).then((value: any) => {
      this.ProdInsert = value;
      this.ProdInsert = this.ProdInsert.table;
      console.log(this.ProdInsert);
    });
  }
  list_of_prod_details(details: any) {
    this.ProdDetails = details;
    this.WebSite_Product_Select_List_ByPk();
  }
  //// for subproduct Data Details/////


  async WebSite_Sub_Category_Select_FkWebSite_Category() {
    debugger
    const MoObj: any = {};
    MoObj.Pid = 'cac94919-0082-444c-9747-065e98f48a65';
    MoObj.FkWebSite_Category = this.SubDropdownLIstid;
    await this.mainService.TwoMethod(MoObj).then(value => {
      this.SubDropdownLIst = value;
      this.SubDropdownLIst = this.SubDropdownLIst.table;
      console.log(this.SubDropdownLIst)
      // this.WebSite_Prod_Category_Select_FkWebSiteSub_Category();
    });

  }
  a: any


  list_of_id(id: number) {
    debugger
    this.SubDropdownLIstid = id
    this.WebSite_Sub_Category_Select_FkWebSite_Category()

  }

  WebSite_Prod_Category_Select_FkWebSiteSub_Category(prodId: any) {
    debugger
    // alert(prodId);
    const MoObj: any = {};
    MoObj.Pid = 'f0162c35-f6e3-4e62-936d-92b7d4d43c3b';
    MoObj.FkWebSiteSub_Category = prodId
    this.mainService.TwoMethod(MoObj).then((value: any) => {
      // this.ProdList = value;
      this.ProdList = value.table;
      console.log(this.ProdList)
    });

  }
  list_of_Prod_id(prod: any) {
    debugger
    this.ProdListId = prod;
    this.WebSite_Prod_Category_Select_FkWebSiteSub_Category(this.ProdListId);
  }

  async WebSite_Product_Search() {debugger
    const MoObj: any = {};
    MoObj.Pid = '66ab342b-f36f-4b9b-b919-49917ad9876c';
    MoObj.Search = this.searchform.value.Id;
    this.mainService.TwoMethod(MoObj).then(async value => {
      this.SpResult = value;
      this.SpResult = this.SpResult.table;
      
      // console.log(this.SpResult)
      // alert(JSON.stringify(this.SpResult.table));
    })
    .catch(error =>{
      console.error('Error fetching search result:',error);
    });
    
    }

    reset() {
      this.searchform.reset();
    }



  async Test_AutoSearch() {
    // 
    const MoObj: any = {};
    MoObj.Pid = 'cd2d2fa9-f592-4167-9d70-db44f28af6fc';
    MoObj.Search = this.searchform.value.Id;
    this.mainService.TwoMethod(MoObj).then(async value => {
      this.SpResult = value;
      this.SpResult = this.SpResult.table;
      // console.log(this.SpResult)
      // alert(JSON.stringify(this.SpResult.table));
    });
    
  }


  RowSelected(u: any) {
    // 
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/discription/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display = 'none';
    console.log(this.table)
    
  }
  RowSelect(u: any) {
    // 
    this.selectedData = u;
    localStorage.setItem('setList', JSON.stringify(this.selectedData));
    this.route.navigate(['/product/']);
    this.table = document.getElementById("tablelist");
    this.cards = document.getElementById("card");
    this.cards.style.display = "none";
    this.table.style.display = 'none';
    console.log(this.table)
  }

// for Mobile menu//

 

}

