import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>("/products/display");
  }
  addproduct(product:Product):Observable<Product[]>{
    console.log(product);
    alert("productadded");  
    return this.httpClient.post<Product[]>("/products/addproduct",product);
  }
  deleteproduct(pid:any):Observable<Product[]>{
    alert("Deleting product");
    return this.httpClient.delete<Product[]>("products/deleteproduct/"+pid);
  }
  updateproduct(product:Product):Observable<Object>{
    alert("updating product");
    console.log(product);
    return this.httpClient.put("products/updateproduct/",product);
  }
  getProductByID(pid:number):Observable<Product>{
    console.log(pid);
    return this.httpClient.get<Product>( "/products/showproduct/"+ pid);
  }
  searchproductbyname(pname:any):Observable<Product>{
    console.log(pname);
    return this.httpClient.get<Product>("products/searchproduct/" + pname);
  }
  getProductsByPcname(pcname:any):Observable<Product[]>{
    console.log(pcname);
    return this.httpClient.get<Product[]>("/products/searchbycategory/"+pcname);
  }
}
