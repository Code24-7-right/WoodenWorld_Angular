import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-showcartitems',
  templateUrl: './showcartitems.component.html',
  styleUrls: ['./showcartitems.component.css']
})
export class ShowcartitemsComponent implements OnInit {
  loopIteration:any;
  uid:any;
  position:any = 0;
  usercart:Cart[] = [];
  cart:Cart=new Cart();
  cartProducts:Product[]=[]
  totalPrice:any;
  price:any = 0;
  notchanged:boolean=true;
  constructor(private route:ActivatedRoute,private CartService:CartserviceService,private router:Router) { }

  ngOnInit(): void 
  {
    this.uid =  this.route.snapshot.params['userid'];
    this.getCartProducts();
    this.CartService.getUserCart(this.uid).subscribe(data=>
    {
        this.usercart = data;
    });
    this.getTotalPrice();
  }
  getTotalPrice(){
    this.CartService.getTotalPrice(this.uid).subscribe((data:any)=>
    {
      this.totalPrice = data;
      //console.log(this.totalPrice);
    });
  }
  getQuantity(p:Product){
    this.position = this.CartPosition(p);
    //this.getUserCart();
    for(let i =0; i < this.usercart.length; i++){
      if(i === this.position){
        return this.usercart.at(i)?.quantity;
      }
    }
    return 0;
  }
  quantityUnchanged(){
    return this.notchanged;
  }
  DeleteFromCart(p:Product){
    this.position = this.CartPosition(p);
    this.CartService.deleteCartItem(p.pid,this.uid,this.position).subscribe((data:any)=>
    {
      this.cartProducts = data;
    });
    this.price = p.pprice;
    alert("Item Deleted From Cart");
    this.getUserCart();
    this.getUserCart();
    this.CartService.getTotalPrice(this.uid).subscribe((data:any)=>
    {
      this.totalPrice = data;
      console.log(this.totalPrice);
    });
    if(this.notchanged === false){
      this.notchanged = true;
    }
    else{
      this.notchanged = false;
    }
  }
  getCartProducts(){
    this.CartService.getCartItems(this.uid).subscribe((data:any)=>
    {
      this.cartProducts = data;
      /*this.cartProducts.map((value:Product)=> {  
        this.totalPrice=this.totalPrice + ( this.getQuantity(value)?* value.pprice);
      });*/
      /*this.cartProducts.map((value:any)=> {
        this.totalPrice=this.totalPrice + value.pprice;
        //this.totalPrice=this.totalPrice + value.pprice * this.CartService.getQuantity();
      });*/
    });
  }
  CartPosition(p:Product){
    return this.cartProducts.indexOf(p);
  }
  GoToPaymentPage(){
    this.router.navigate(['Billing',this.totalPrice]);
  }
  reduceQuantity(p:Product){
    this.cart.pid = p.pid;
    this.cart.uid = this.uid;
    this.CartService.reduceQuantity(this.cart).subscribe();
    if(this.notchanged === false){
      this.notchanged = true;
    }
    else{
      this.notchanged = false;
    }
    //this.notchanged = false;
    if(p.pprice){
      this.totalPrice = this.totalPrice - p.pprice;
    }
    this.getUserCart();
    this.getUserCart();
  }
  increaseQuantity(p:Product){
    this.cart.pid = p.pid;
    this.cart.uid = this.uid;
    this.CartService.addToCart(this.cart).subscribe({
      
    });
    if(this.notchanged === false){
      this.notchanged = true;
    }
    else{
      this.notchanged = false;
    }
    if(p.pprice){
      this.totalPrice = this.totalPrice + p.pprice;
    }
    this.getUserCart();
    this.getUserCart();
  }
  getUserCart(){
    this.CartService.getUserCart(this.uid).subscribe(data=>
      {
        this.usercart = data;
        //console.log(data);
      });
  }
}
