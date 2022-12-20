import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { LoginService } from '../login.service';
import { Userdetails } from '../userdetails';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:String = "";
  pwd:String = "";
  users:Userdetails[] = [];
  uid:any;
  pid:any;
  cart:Cart=new Cart();
  constructor(private loginservice:LoginService,private router:Router,private UserDetailsService:UserdetailsService,
    private route:ActivatedRoute,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.displayAllUserDetails();
    this.pid = this.route.snapshot.paramMap.get('pid');
  }
  Login(LoginForm:any){
    if(LoginForm.name == "ADMIN" && LoginForm.pwd == "ADMIN"){
      alert("Welcome " + LoginForm.name);
      this.loginservice.setAdminLogin();
      this.router.navigate(['AdminOperations']);
    }
    else{
      let found :boolean= false;
      for(let user of this.users){
        if(LoginForm.name === user.uname && LoginForm.pwd === user.upwd){
          if(this.pid != null){
            this.cart.uid = user.uid;
            this.cart.pid = this.pid;
            this.cart.cid = 0;
            this.cartService.addToCart(this.cart).subscribe();
          }
          found = true;
          this.uid = user.uid;
          this.loginservice.setLoggedIn();
          this.loginservice.setUserid(this.uid);
          alert("User Logged In successfully");
          this.router.navigate(['HomePage',this.uid]);
        } 
      }
      if(found === false){
        alert("Incorrect Login Credentials");
      }
    }
  }
  displayAllUserDetails(){
    this.UserDetailsService.getAllUserDetails().subscribe(data=>
      {
        this.users = data;
      });
  }
}
