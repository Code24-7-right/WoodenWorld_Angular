import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Productcategory } from './productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  constructor(private httpClient:HttpClient) { }
  getAllProductcategory():Observable<Productcategory[]> {
    return this.httpClient.get<Productcategory[]>("/productcategory/display");
  }
  addproductcategory(productcategory:Productcategory):Observable<Productcategory[]>{
    console.log(productcategory);
    alert("Product Category added");
    return this.httpClient.post<Productcategory[]>("/productcategory/addcategory",productcategory);
  }
  deleteproduct(pcid:any):Observable<Productcategory[]>{
    alert("Deleting product category");
    return this.httpClient.delete<Productcategory[]>("productcategory/deletecategory/"+pcid);
  }
  updateProductCategory(productcategory:Productcategory):Observable<Productcategory>{
    return this.httpClient.put<Productcategory>("productcategory/updatecategory/",productcategory);
  }
  getProductCategoryById(pcid:any):Observable<Productcategory>{
    return this.httpClient.get<Productcategory>("productcategory/showcategory/"+pcid);
  }
  searchProductsByCategory(pcid:any):Observable<Product[]>{
    return this.httpClient.get<Product[]>("productcategory/searchProductsInCategory/"+pcid);
  }
}
