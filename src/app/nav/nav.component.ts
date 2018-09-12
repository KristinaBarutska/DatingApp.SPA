import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
   /*public onFormSubmit() {
    console.log(this.model);
  }*/
  onFormSubmit() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Works!');
    }, error => {
      console.log(error);
    } );
  }
  logedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
