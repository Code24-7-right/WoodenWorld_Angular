import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cartoperations',
  templateUrl: './cartoperations.component.html',
  styleUrls: ['./cartoperations.component.css']
})
export class CartoperationsComponent implements OnInit {
  carts:Cart[] = [];
  constructor(private CartService:CartserviceService) { }

  ngOnInit(): void {
    this.displayAllCartDetails();
  }
  displayAllCartDetails(){
    this.CartService.getAllCartDetails().subscribe(data=>
    {
      this.carts = data;
    });
  }

}
