import { Injectable } from '@angular/core';
import { User } from './users/user.class';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  user: User;

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    if(this.user == null) {
    this.router.navigateByUrl('/login');
  }
    return this.user != null;
  }
}
