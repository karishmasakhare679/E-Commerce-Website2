import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  SpResult: any;
  dataSource: any;
  Id: any;
grocery_Img: any;

  constructor(private mainservice: MainService, private router: Router) { }

  ngOnInit(): void {
    this.WebSite_Product_PK();
    this.Id = localStorage.getItem('setList');
    var MoObj: any = {};
    // this.isLoading = true;
    MoObj.FkWebSiteSub_Category = this.Id;

    //expenses form li select ki pid hai.
    MoObj.Pid = "f0162c35-f6e3-4e62-936d-92b7d4d43c3b";

    this.mainservice.TwoMethod(MoObj).then(value => {
      this.SpResult = value;
      this.dataSource = this.SpResult.table;
      // this.isLoading = false;
      console.log(this.SpResult);
      console.log("get:", this.dataSource)
    });
  }
  WebSite_Product_PK() {
    var MoObj: any = {}
    MoObj.Pid = "8a1645d5-e867-450b-9168-30dfbf20a395";
    MoObj.PkWebSite_Product ="";
    this.mainservice.TwoMethod(MoObj).then(value => {
      this.SpResult = value;
      this.SpResult = this.SpResult.table;
    });
}
}
