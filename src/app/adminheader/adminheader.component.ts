import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginservice.adminLogout();
    this.router.navigate(['Home']);
  }
}
