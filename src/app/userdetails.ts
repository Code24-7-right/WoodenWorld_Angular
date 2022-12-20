import { Cart } from "./cart";
import { Product } from "./product";

export class Userdetails {
    uid:number | undefined;
    uname:String | undefined;
    uemail:String| undefined;
    uphoneno:number | undefined;
    upwd:String | undefined;
    address:String | undefined;
    city:String | undefined;
    country:String | undefined;
    post_code:number | undefined;
    cartProducts:Product[]=[]
    //carts:Cart = new Cart();
    //cartProducts:Set<Product>=new Set<Product>();
}
