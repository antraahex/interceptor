// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
//   from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map, tap } from 'rxjs/operators';

// @Injectable()

// export class MyInterceptor implements HttpInterceptor {

//   dup:HttpRequest<any>
//     intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ):
//     Observable<HttpEvent<any>> {

//     return this.changedResult(req, next);

//   }

//   public changedResult(req:HttpRequest<any>, next:HttpHandler) {
//     const dup = req.clone({ body: null });
//     return next.handle(dup)
//       .pipe(tap(event => console.log(event)))
//   }


// }


import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from './data.json';

const PRODUCTS_URL = "http://localhost:4200/products";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted request: ' + request.url);
        if (request.url === PRODUCTS_URL) {
            console.log('Data is Loaded from:' + request.url);
            return of(new HttpResponse({ status: 200, body: ((data) as any).default}));
        }
        return next.handle(request);

    }
}
