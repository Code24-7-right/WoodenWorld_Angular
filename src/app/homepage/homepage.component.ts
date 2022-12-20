import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { LoginService } from '../login.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductcategoryService } from '../productcategory.service';
import* as toastr from 'toastr';
import { Productcategory } from '../productcategory';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  carts:Cart[] = [];
  cart:Cart = new Cart();
  products:Product[] | undefined;
  searchfor:any;
  uid:any;
  pid:any;
  totalPrice:any;
  productcategories:Productcategory[]=[];
  i = 0;
  constructor(private ProductService:ProductService,private route:ActivatedRoute,private router:Router,
    private loginservice:LoginService,private CartService:CartserviceService,private productCategoryService:ProductcategoryService) { }
  ngOnInit(): void {
    this.displayAllProducts();
    this.displayAllProductCategories();
    this.uid = this.route.snapshot.paramMap.get('uid');
  }
  showProductsByCategory(pcid:any){
    this.router.navigate(['productsByCategory',pcid]);
  }
  displayAllProducts(){
    this.ProductService.getAllProducts().subscribe(data=>
      {
        this.products = data;
      });
  }
  displayAllProductCategories(){
    this.productCategoryService.getAllProductcategory().subscribe(data=>
      {
        this.productcategories = data;
        //console.log(data);
      });
  }
  addToCart(){
    //console.log(this.cart);
    this.CartService.addToCart(this.cart).subscribe(data=>
      {
        this.carts = data;
      });
  }
  goToUserCart(pid:any){
    if(this.loginservice.getLoggedIn()){
      this.cart.pid = pid;
      this.cart.uid = this.uid;
      //console.log(pid + " " + this.cart.uid);
      this.CartService.addToCart(this.cart).subscribe(data=>
      {
        this.carts = data;
      });
      this.showToastr();
      //alert("Product added to cart");
      //this.router.navigate(['UserCart',this.uid,pid]);
    }
    else{
      this.router.navigate(['Login',pid]);
    }
  }
  GoToPaymentPage(product:Product){
    //console.log(product);
    this.totalPrice = product.pprice;
    this.router.navigate(['Payment',this.totalPrice]);
  }
  showToastr(){
    toastr.success("Added to cart");
  }
}