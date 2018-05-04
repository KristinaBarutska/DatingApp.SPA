import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.http.get('http://localhost:5050/api/values').subscribe(response => {
       this.values = response.json();
      // console.log(response);
    });
  }

}
