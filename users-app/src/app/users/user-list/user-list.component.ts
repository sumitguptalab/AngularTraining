import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../json-resp.class';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.list().subscribe(jsonResp => {
      console.log(jsonResp);
      this.users = jsonResp.data as User[]
      ;
    });
  }

}
