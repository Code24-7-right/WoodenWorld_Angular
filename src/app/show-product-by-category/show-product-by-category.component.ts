import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { LoginService } from '../login.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Productcategory } from '../productcategory';
import { ProductcategoryService } from '../productcategory.service';
import* as toastr from 'toastr';


@Component({
  selector: 'app-show-product-by-category',
  templateUrl: './show-product-by-category.component.html',
  styleUrls: ['./show-product-by-category.component.css']
})
export class ShowProductByCategoryComponent implements OnInit {
  searchfor:any;
  productcategories:Productcategory[]=[];
  productsFound:Product[] | undefined;
  products:Product[] | undefined;
  carts:Cart[] = [];
  cart:Cart = new Cart();
  uid:any;
  pcid:any;
  constructor(private ProductService:ProductService,private route:ActivatedRoute,private router:Router,
    private loginservice:LoginService,private CartService:CartserviceService,private productCategoryService:ProductcategoryService) { }

  ngOnInit(): void {
    this.displayAllProductCategories();
    this.displayAllProducts();
    this.pcid = this.route.snapshot.paramMap.get('pcid');
    this.uid = this.loginservice.getUserid();
    this.searchProductsInCategory();
  }
  searchProductsInCategory(){
    this.productCategoryService.searchProductsByCategory(this.pcid).subscribe(data=>
      {
        this.productsFound = data;
      });
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
        console.log(data);
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
    console.log(product);
    this.router.navigate(['Payment',product.pprice]);
  }
  showToastr(){
    toastr.success("Added to cart");
  }
  showProductsByCategory(pcid:any){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['productsByCategory',pcid]);
  }); 
    //this.router.navigate(['productsByCategory',pcid]);
  }
}
