import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'e-commerce';
  onActivate(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
    }

    // this code for loading //
    products: any;
    constructor(private ngxLoader: NgxUiLoaderService,private cartService:CartService) {}
    showLoader() {
      this.ngxLoader.start(); // Start the loader
    }
  
    hideLoader() {
      this.ngxLoader.stop(); // Stop the loader
    }
  
    ngOnInit(): void {
     this.showLoader();
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
        console.log("product :", this.products)
      this.hideLoader();
    });

     this.hideLoader();
    }
     // this code for loading //
}
