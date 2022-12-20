import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { LoginService } from '../login.service';
import { Product } from '../product';
@Component({
  selector: 'app-logged-in-header',
  templateUrl: './logged-in-header.component.html',
  styleUrls: ['./logged-in-header.component.css']
})
export class LoggedInHeaderComponent implements OnInit {
  searchfor:any;
  uid:any;
  noOfCartItems = 0;
  constructor(private loginService:LoginService,private router:Router,private route:ActivatedRoute,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.uid = this.loginService.getUserid();
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['Login']);
  }
  ShowCartItems(){
    this.uid =  this.loginService.getUserid();
    this.router.navigate(['ShowCartItems',this.uid]);
  }
  getNoOfCartItems(){
    this.uid = this.loginService.getUserid();
    this.cartService.getNoOfCartItems(this.uid)
  }
}
