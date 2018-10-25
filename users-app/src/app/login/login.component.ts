import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { User } from '../users/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private loginService: LoginService, private systemService: SystemService, private router: Router) { }

  ngOnInit() {

  }

  login(): void {
    this.loginService.authencate(this.username, this.password).subscribe(jsonResp => {
      console.log(jsonResp);
      if ( jsonResp.rc === 200 ) {
      this.systemService.user = jsonResp.data as User;
      this.router.navigateByUrl('/user/list');
      } else {
        alert('failed to auth');
        this.router.navigateByUrl('/login');
      }
    });
  }
}
