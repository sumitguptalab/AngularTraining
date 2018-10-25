import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../json-resp.class';

import { Observable } from 'rxjs';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sortBy = 'Id';
  searchCriteria: string;

  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.list().subscribe(jsonResp => {
      console.log(jsonResp);
      this.users = jsonResp.data as User[]
      ;
    });
  }

  remove(user: User): void {
    this.userService.remove(user)
    .subscribe(jsonResp => {
      console.log(jsonResp);
      if (jsonResp.rc === 200) {
        this.userService.list().subscribe(jsonResp => { 
          this.users = jsonResp.data as User[]
          ;
        });
      }
    });
  }
}
