import { Component, OnInit } from '@angular/core';
import { Productcategory } from '../productcategory';
import { ProductcategoryService } from '../productcategory.service';

@Component({
  selector: 'app-productcategoryoperations',
  templateUrl: './productcategoryoperations.component.html',
  styleUrls: ['./productcategoryoperations.component.css']
})
export class ProductcategoryoperationsComponent implements OnInit {
  productcategories:Productcategory[] | undefined;
  productcategory:Productcategory = new Productcategory();
  displayUpdateModal: any;
  displayAddModal:any;
  constructor(private ProductCategoryServices:ProductcategoryService) { }

  ngOnInit(): void {
    this.displayAllProductCategories();
  }
  displayAllProductCategories(){
    this.ProductCategoryServices.getAllProductcategory().subscribe(data=>
      {
        this.productcategories = data;
      });
  }
  openAddProductCategoryModal(){
    this.displayAddModal="block";
  }
  closeAddProductCategoryModal(){
    this.displayAddModal="none";
  }
  addproductcategory(addproductcategoryform:any){
    this.productcategory = addproductcategoryform;
    this.ProductCategoryServices.addproductcategory(this.productcategory).subscribe((data:any)=>
      {
        this.productcategories = data;
      });
    this.displayAllProductCategories();
  }
  openUpdateProductCategoryModal(){
    this.displayUpdateModal = "block";
  }
  closeUpdateProductCategoryModal(){
    this.displayUpdateModal = "none";
  }
  sendCurrentProductCategoryData(productcategory:any){
    this.productcategory = productcategory;
  }
  updateproductcategory(){
    this.ProductCategoryServices.updateProductCategory(this.productcategory).subscribe();
    alert("Product category updated");
  }
  deleteproductcategory(pcid:any){
    let length = this.productcategories?.length;
    this.ProductCategoryServices.deleteproduct(pcid).subscribe(data=>{
      this.productcategories = data;
    });
    if(this.productcategories?.length == length){
      alert("Cannot delete category as products are stored in it");
    }
    this.displayAllProductCategories();
  }
}
