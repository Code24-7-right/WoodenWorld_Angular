import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {}
  ProductOperations(){
    this.router.navigate(['ProductOperations'],{relativeTo:this.route});
  }
  ProductCategoryOperations(){
    this.router.navigate(['ProductCategoryOperations'],{relativeTo:this.route});
  }
  UserOperations(){
    this.router.navigate(['UserOperations'],{relativeTo:this.route});
  }
  CartOperations(){
    this.router.navigate(['CartOperations'],{relativeTo:this.route});
  }
}
