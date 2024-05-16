import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  a: any = [];

  addtoCart(product: any) {
    // debugger
    this.cartItemList.forEach((value: any, key: any, map: any) => {
      // alert(` ${value.pkWebSite_Test}`);
      this.a.push(` ${value}`)
    });
    //  alert(this.a)
    var greaterThanTen = this.cartItemList.findIndex((element: any) => element.id == product.id);



    //  alert(greaterThanTen)
    if (greaterThanTen === -1) {
      product['qty'] = 1
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(this.cartItemList)
      this.getTotalPrice();
    } else {
      let qty = this.cartItemList[greaterThanTen].qty + 1
      this.cartItemList[greaterThanTen].qty = qty
      let quantitycost = this.cartItemList[greaterThanTen].totalPrice + product.totalPrice
      this.cartItemList[greaterThanTen].totalPrice = quantitycost
      // this.cartItemList.push(this.cartItemList[greaterThanTen].quantity);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.totalPrice;
      // alert(grandTotal)
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
