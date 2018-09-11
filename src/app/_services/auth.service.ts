import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
baseURL = 'http://localhost:5555/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
return this.http.post(this.baseURL + 'login', model)
.pipe(
  map((response: any) => {
    const user = response;
    console.log(response);
    if (user) {
      localStorage.setItem('token', user.token);
    }
  })
);
}
}
