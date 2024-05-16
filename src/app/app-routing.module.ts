import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DiscriptionComponent } from './discription/discription.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductLazyComponent } from './product-lazy/product-lazy.component';
import { ProductComponent } from './product/product.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { RagisterComponent } from './ragister/ragister.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { DiscriptionTestComponent } from './discription-test/discription-test.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'header1', component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'discription',component:DiscriptionComponent},
  {path:'discription-test',component:DiscriptionTestComponent},
  {path:'contact',component:ContactComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'compare',component:CompareComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'login', component:LoginComponent},
  {path:'quick_view',component:QuickViewComponent},
  {path:'my_cart', component:MyCartComponent},
  {path:'ragister',component:RagisterComponent},
  {path:'about', component:AboutComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'return-policy',component:ReturnPolicyComponent},
  {path:'product',component:ProductComponent},
  {path:'product-lazy',component:ProductLazyComponent},
  {path:'footer', component:FooterComponent},
  {path: 'terms-condition', component: TermsconditionComponent},
  {path: 'refund-policy', component:RefundPolicyComponent},
  {path: 'shipping-policy', component:ShippingPolicyComponent},
  {path: 'product-details',component:ProductDetailsComponent},
 
  {path:'', redirectTo:"header",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
