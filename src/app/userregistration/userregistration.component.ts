import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Userdetails } from '../userdetails';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  userdetails: Userdetails = new Userdetails();

  constructor(private router:Router,private userservice:UserdetailsService) { }

  ngOnInit(): void {
  }
  registration(UserRegisterForm:any){
    this.userdetails = UserRegisterForm;
    this.userservice.setUserLoggedIn();
    this.userservice.addUser(this.userdetails).subscribe();
    this.router.navigate(['Login']);
  }

}
