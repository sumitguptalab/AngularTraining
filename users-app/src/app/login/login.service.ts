import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { JsonResp } from '../json-resp.class';


const url = 'http://localhost:5000/Authencate/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authencate(username: string, pwd: string): Observable<JsonResp> {
    return this.http.get(url + username + '/'  + pwd) as Observable<JsonResp>;
  }
}
