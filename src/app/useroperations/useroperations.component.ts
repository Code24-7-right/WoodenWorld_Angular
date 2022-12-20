import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../userdetails';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-useroperations',
  templateUrl: './useroperations.component.html',
  styleUrls: ['./useroperations.component.css']
})
export class UseroperationsComponent implements OnInit {
  users:Userdetails[] | undefined;
  constructor(private UserDetailsService:UserdetailsService) { }

  ngOnInit(): void {
    this.displayAllUserDetails();
  }
  displayAllUserDetails(){
    this.UserDetailsService.getAllUserDetails().subscribe(data=>
      {
        this.users = data;
      });
  }
}
