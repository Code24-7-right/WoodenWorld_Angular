import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';
import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  carts:Cart[] = [];
  users:Userdetails[]=[];
  user:Userdetails=new Userdetails();
  cartProducts:Product[]=[]
  cart:Cart = new Cart();
  position:any;
  totalPrice:number = 0;
  price:any = 0;

  constructor(private route:ActivatedRoute,private CartService:CartserviceService,private router:Router) { }

  ngOnInit(): void {
    this.cart.uid = this.route.snapshot.params['uid'];
    this.cart.pid = this.route.snapshot.params['pid'];
    this.cart.cid = 0;  
    //this.addToCart();
    this.getCartItems();
  }
  getCartItems(){
    this.CartService.getCartItems(this.cart.uid).subscribe((data:any)=>
    {
      this.cartProducts = data;
      this.cartProducts.map((value:any)=> {  
        this.totalPrice=this.totalPrice + value.pprice;
      });
    });
  }
  /*addToCart(){
    this.CartService.addToCart(this.cart).subscribe(data=>
      {
        this.carts = data;
      });
  }*/
  DeleteFromCart(p:Product){
    this.position = this.cartProducts.indexOf(p);
    this.CartService.deleteCartItem(p.pid,this.cart.uid,this.position).subscribe((data:any)=>
    {
      this.cartProducts = data;
    });
    this.price = p.pprice;
    this.totalPrice = this.totalPrice - this.price;
    this.getCartItems();
    alert("Item Deleted From Cart");
  }
  GoToPaymentPage(){
    this.router.navigate(['Payment']);
  }
}
