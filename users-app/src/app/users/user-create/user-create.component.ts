import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User =  new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.userService.create(this.user)
    .subscribe(jsonResp => {
      console.log(jsonResp);
      alert('User save successfully');
      this.router.navigateByUrl('/user/list');
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/user/list');
  }
}
