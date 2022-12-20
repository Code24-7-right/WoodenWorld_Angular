import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdetails } from './userdetails';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  userLoggedIn:boolean = false;
  constructor(private httpClient:HttpClient) { 
    this.userLoggedIn = true;
  }
  setUserLoggedIn(){
    this.userLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.userLoggedIn;
  }
  getAllUserDetails():Observable<Userdetails[]>{
    return this.httpClient.get<Userdetails[]>("/userdetails/display");
  }
  addUser(userdetails:Userdetails):Observable<Userdetails>{
    console.log(userdetails); 
    alert("User Registered successfully");
    alert("Please login to use your account");
    return this.httpClient.post<Userdetails>("/userdetails/adduser",userdetails);
  }
  /*ValidateUserDetails(uname:String,upwd:String):Observable<Boolean>{
    return this.httpClient.post<Boolean>("/ValidateUser",[uname,upwd]);
  }*/
}
