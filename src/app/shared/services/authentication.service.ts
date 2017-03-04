import { Injectable } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

import { Credentials } from "../models/credentials";
import { Principal } from "../models/principal";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private requestOptions: RequestOptions) {}

  authenticate(credentials: Credentials) : Observable<Principal> {

    if (credentials.valid()) {
      this.requestOptions.headers.set('Authorization', 'Basic ' + credentials.encrypt())
    }

    return this.http.get('/principal')
      .map(response => {
        let principal: Principal = response.json();
        if (principal) {
          localStorage.setItem('principal', JSON.stringify(principal));
        }
        return principal;
      });
  }

  logout() {
    return this.http.post('/logout', '{}')
      .map(() => localStorage.removeItem('principal'));
  }

}
