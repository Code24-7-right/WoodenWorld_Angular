import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Userdetails } from './userdetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn:boolean = false;
  userid:any;
  adminLogin:boolean = false;
  constructor(private httpClient:HttpClient) {
    this.loggedIn = false;
    this.adminLogin = false;
   }
  setLoggedIn(){
    this.loggedIn = true;
  }
  getLoggedIn(){
    return this.loggedIn;
  }
  logout(){
    this.loggedIn = false;
  }
  addUser(userdetails:Userdetails):Observable<Userdetails>{
    console.log(userdetails); 
    alert("User Registered successfully");
    return this.httpClient.post<Userdetails>("/userdetails/adduser",userdetails);
  }
  setUserid(uid:any){
    this.userid = uid;
  }
  getUserid(){
    return this.userid;
  }
  ValidateUserDetails(name:String,pwd:String):Observable<Boolean>{
    return this.httpClient.get<Boolean>("/userdetails/validateuser/"+name+"/" + pwd);
  }
  setAdminLogin(){
    this.adminLogin = true;
  }
  getAdminLogin(){
    return this.adminLogin;
  }
  adminLogout(){
   this.adminLogin = false;
  }
}
