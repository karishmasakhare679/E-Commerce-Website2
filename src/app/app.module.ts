import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DiscriptionComponent } from './discription/discription.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { HomeLazyComponent } from './home-lazy/home-lazy.component';
import { LoginLazyComponent } from './login-lazy/login-lazy.component';
import { QuickViewLazyComponent } from './quick-view-lazy/quick-view-lazy.component';
import { MyCartLazyComponent } from './my-cart-lazy/my-cart-lazy.component';
import { CheckoutLazyComponent } from './checkout-lazy/checkout-lazy.component';
import { CategoriesLazyComponent } from './categories-lazy/categories-lazy.component';
import { WishlistLazyComponent } from './wishlist-lazy/wishlist-lazy.component';
import { DiscriptionLazyComponent } from './discription-lazy/discription-lazy.component';
import { FooterLazyComponent } from './footer-lazy/footer-lazy.component';
import { HeaderLazyComponent } from './header-lazy/header-lazy.component';
import { RagisterComponent } from './ragister/ragister.component';
import { RagisterLazyComponent } from './ragister-lazy/ragister-lazy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AboutLazyComponent } from './about-lazy/about-lazy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { ReturnPolicyLazyComponent } from './return-policy-lazy/return-policy-lazy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PrivacyPolicyLayzComponent } from './privacy-policy-layz/privacy-policy-layz.component';
import { ProductComponent } from './product/product.component';
import { ProductLazyComponent } from './product-lazy/product-lazy.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CompareLazyComponent } from './compare-lazy/compare-lazy.component';
import { CompareComponent } from './compare/compare.component';
import { ContactLazyComponent } from './contact-lazy/contact-lazy.component';
import { DiscriptionTestComponent } from './discription-test/discription-test.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DiscriptionComponent,
    ContactComponent,
    WishlistComponent,
    CategoriesComponent,
    CheckoutComponent,
    LoginComponent,
    QuickViewComponent,
    MyCartComponent,
    HomeLazyComponent,
    LoginLazyComponent,
    QuickViewLazyComponent,
    MyCartLazyComponent,
    CheckoutLazyComponent,
    CategoriesLazyComponent,
    WishlistLazyComponent,
    DiscriptionLazyComponent,
    FooterLazyComponent,
    HeaderLazyComponent,
    RagisterComponent,
    RagisterLazyComponent,
    AboutComponent,
    AboutLazyComponent,
    ReturnPolicyComponent,
    ReturnPolicyLazyComponent,
    PrivacyPolicyComponent,
    PrivacyPolicyLayzComponent,
    ProductComponent,
    ProductLazyComponent,
    CompareLazyComponent,
    CompareComponent,
    ContactLazyComponent,
    DiscriptionTestComponent,
    TermsconditionComponent,
    RefundPolicyComponent,
    ShippingPolicyComponent,
    ProductDetailsComponent,
    
    
    
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CarouselModule,
    Ng2SearchPipeModule,
    NgbModule ,
    NgbCarouselModule,
    NgxUiLoaderModule.forRoot({
      pbColor: '#ff4081', // progress bar color
      fgsColor: '#ff4081', // foreground spinner color
      text: 'Please wait', // loading text
      // textColor: '#ff4081', // text color
      pbThickness: 6, 
      
    }),
    
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
