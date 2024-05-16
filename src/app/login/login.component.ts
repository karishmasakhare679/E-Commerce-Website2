import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import { CartService } from '../services/cart.service';
import { AuthrizationService } from '../services/auth.service';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginform: any;
  // @ViewChild('f', { static: false }) loginForm!: NgForm;
  // errors: string = "";
  hide = true;
  loading2 = false;
  @ViewChild('f', { static: false }) loginForm!: NgForm;
  errors: string = "";
  submitted = false;
  // form group Declaration
  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  

  constructor( private fb: FormBuilder, private mainService: MainService,private router: Router, public authservice: AuthrizationService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['home']);
    }
    this.authservice.logout();
  }
 // login 
 login() {
  this.loading2 = true;
  this.authservice.login(this.loginform.value.email, this.loginform.value.password)
    .subscribe(
      result => {
        if (result.result == 1) {
          this.router.navigate(['/home']);
        }
        else {
          alert("Login Fail")
        }
        this.loading2 = false;
      },
      error => {
        alert("Login faild")
      });
}
}
