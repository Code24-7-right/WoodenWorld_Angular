import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  totalPrice:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPrice = this.route.snapshot.paramMap.get('totalPrice');
  }
  payment(){
    alert("Total Payment:"+ this.totalPrice);
    this.router.navigate(['Payment',this.totalPrice]);
    }
}
