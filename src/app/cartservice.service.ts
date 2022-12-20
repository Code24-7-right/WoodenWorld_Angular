import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  constructor(private HttpClient:HttpClient) { }
  
  addToCart(cart:Cart):Observable<Cart[]> {
    return this.HttpClient.post<Cart[]>("/cart/addtocart",cart);
  }
  reduceQuantity(cart:Cart):Observable<Cart[]>{
    return this.HttpClient.put<Cart[]>("/cart/reduceQuantity",cart);
  }
  getUserCart(uid:any):Observable<Cart[]>{
    return this.HttpClient.get<Cart[]>("/cart/usercart/"+uid);
  }
  getAllCartDetails():Observable<Cart[]>{
    return this.HttpClient.get<Cart[]>("/cart/display");
  }
  getCartItems(uid:any):Observable<Product[]>{
    return this.HttpClient.get<Product[]>("cart/items/"+uid);
  }
  deleteCartItem(pid:any,uid:any,position:any){
    return this.HttpClient.delete("cart/delete/"+pid+"/"+uid+"/"+position);
  }
  getNoOfCartItems(uid:any){
    //return this.HttpClient.jsonp("cart/cartLength/"+uid,"callback");
    return  this.HttpClient.get("cart/cartLength/"+uid);
  }
  totalPrice:any;
  getTotalPrice(uid:any):Observable<number>{
    return this.HttpClient.get<number>("/cart/totalPrice/"+uid)
    //this.totalPrice =  this.HttpClient.get<number>("/cart/totalPrice/"+uid);
    //console.log(Number(this.totalPrice));
    //return this.totalPrice;
  }
}
