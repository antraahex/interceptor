// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Component({
//     selector: 'app-root',
//     template: `
//         <div><h3>Response</h3>{{response|async|json}}</div>
//         <button (click)="request()">Make request</button>`
//     ,
// })
// export class AppComponent {
//     response: Observable<any>;
//     constructor(private http: HttpClient) {}

//     request() {
//         const url = 'https://jsonplaceholder.typicode.com/posts/1';
//         this.response = this.http.get(url, {observe: 'body'});
//         console.log(this.response);
//     }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const PRODUCTS_URL = "http://localhost:4200/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    url: string;
  products:any=[];
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
      this.url = PRODUCTS_URL;
    this.httpClient.get(PRODUCTS_URL).subscribe((data)=>{
      console.log(data);
      this.products= data;
    })
  }
}
