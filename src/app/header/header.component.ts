import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products:Product[] | undefined;
  searchfor:any;
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
}
