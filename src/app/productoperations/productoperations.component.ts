import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productoperations',
  templateUrl: './productoperations.component.html',
  styleUrls: ['./productoperations.component.css']
})
export class ProductoperationsComponent implements OnInit {
  products: Product[] | undefined;
  product: Product = new Product();
  displaystyle:any;
  AddModal:any;
  constructor(private ProductService:ProductService) { }
  ngOnInit(): void {
    this.displayAllProducts();
  }
  displayAllProducts(){
    this.ProductService.getAllProducts().subscribe(data=>
      {
        this.products = data;
      });
  }
  openAddProductModal(){
    this.AddModal="block";
  }
  closeAddProductModal(){
    this.AddModal="none";
  }
  addproduct(addproductform:any){
    this.product = addproductform;
    this.ProductService.addproduct(this.product).subscribe((data:any)=>
    {
      this.products = data;
      console.log(data);
    });
    this.displayAllProducts();
  }
  openUpdateProductModal(){
    this.displaystyle = "block";
  }
  closeUpdateProductModal(){
    this.displaystyle = "none";
  }
  sendCurrentProductData(product:any){
    this.product = product;
  }
  updateproduct(){
    this.ProductService.updateproduct(this.product).subscribe((data:any)=>{
    });
  }
  deleteproduct(pid:any){
    this.ProductService.deleteproduct(pid).subscribe(data=>{
      this.products = data;
    });
    this.displayAllProducts();
  }
}
