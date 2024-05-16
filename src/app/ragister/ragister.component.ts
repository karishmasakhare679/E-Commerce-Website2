import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { InstamojoserviceService } from '../services/instamojoservice.service';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {

  registerform: any = FormGroup;
  DropdownLIst:any;

  constructor( private fb: FormBuilder, private mainService: MainService,private route: Router, private auth: InstamojoserviceService, private cartService: CartService) { }

  ngOnInit(): void {
    this.registerform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/[^a-zA-Z]/)]],
      address: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      ship_address: ['', [Validators.required]],
      ship_pincode: ['', [Validators.required]],
      ship_city: ['', [Validators.required]]

    });
  }
  register(){
    const MoObj: any = {};
    MoObj.Pid = '2fa618f8-b9f1-446e-b280-ab031283786a';
    MoObj.UserName = this.registerform.value.username;
    MoObj.Password = this.registerform.value.password;
    MoObj.Email = this.registerform.value.email;
    MoObj.FName = this.registerform.value.firstname;
    MoObj.LName = this.registerform.value.lastname;
    MoObj.Mobno = this.registerform.value.phone;
    MoObj.Add1 = this.registerform.value.address;
    MoObj.PinCode = this.registerform.value.pincode;
    MoObj.City = this.registerform.value.city;
    MoObj.ShippingAdd = this.registerform.value.ship_address;
    MoObj.SAddPinCode = this.registerform.value.ship_pincode;
    MoObj.SAddCity = this.registerform.value.ship_city;
    this.mainService.TwoMethod(MoObj).then(value => {
      this.DropdownLIst = value;
      this.DropdownLIst = this.DropdownLIst.table;
      console.log(this.DropdownLIst);
      alert("Registered Successfully");
    });
    this.reset()
  }
  reset() {
    this.registerform.reset();
  }

}
