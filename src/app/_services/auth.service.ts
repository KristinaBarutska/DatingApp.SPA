import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
 baseUrl = 'http://localhost/5555/api/auth/';
 userToken: any;
 constructor(private http: Http) { }
 /* login (model: any) {
     const headers = new Headers({'Content-type': 'application/json'});
     const options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl + 'login', model, options).map((response: Response) => {
    const user = response.json();
    if (user) {
        localStorage.setItem('token', user.tokenString);
        this.userToken = user.tokenString;
    }
    });
 } */

 /*login (model: any) {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
     const options = new RequestOptions({headers: headers});
   return this.http.post(this.baseUrl + 'login', JSON.stringify(model), options);
}*/

login(model: any): Observable<any> {
    // let head = new Headers({ 'Content-Type': 'application/json' });
   const headers = new Headers();
   headers.append('Content-Type', 'application/json');
   const options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'login', JSON.stringify(model), options)
         .map((response: Response) => {
             // login successful if there's a jwt token in the response
             const token = response.json() && response.json().token;
             console.log(response);
         });
 }
}

