import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges{

  @Input() productId: string | null = null;
  productDetails: any;

  constructor(private mainService: MainService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productId'] && this.productId) {
      this.loadProductDetails(this.productId);
    }
  }
  loadProductDetails(id: string) {
    const MoObj: any = {};
    MoObj.Pid = '14ff19f9-48b9-4492-bbf3-93479a846cec';
    MoObj.PkWebSite_Product = id;
    this.mainService.TwoMethod(MoObj).then((value: any) => {
      this.productDetails = value.table[0];
      console.log(this.productDetails);
    });
  }


}
