import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.userService.get(id).subscribe(jsonResp => {
      console.log(jsonResp);
      this.user = jsonResp.data;
    });
  }

  save(): void {
    this.userService.change(this.user)
      .subscribe(jsonResp => {
        console.log(jsonResp);
        if (jsonResp.rc === 200) {
          alert('User record successfully changed');
          this.router.navigateByUrl('/user/list');
        }
      });
  }

  cancel(): void {
    this.router.navigateByUrl('/user/list');
  }
}
