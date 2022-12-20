import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WoodenWorld';
  constructor(private loginservice:LoginService,private router:Router){

  }
  ngOnInit(): void {}
  GetHeader1(){
    if(this.loginservice.getLoggedIn() === false && this.loginservice.getAdminLogin() === false){
      return true;
    }
    else{
      return false;
    }
  }
  GetHeader2(){
    if(this.loginservice.getLoggedIn()){
      return true;
    }
    else{
      return false;
    }
  }
  GetHeader3(){
    if(this.loginservice.getAdminLogin()){
      return true;
    }
    else{
      return false;
    }
  }
  /*GetHeader(){
    if(this.loginservice.getLoggedIn()){
      return true;
    }
    else{
      return false;
    }
  }*/

}
