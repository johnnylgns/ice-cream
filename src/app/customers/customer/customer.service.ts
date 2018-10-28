import { Injectable } from '@angular/core';      
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService {

  private customerUrl = 'http://northwind.servicestack.net/customers';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.http.get<any>(this.customerUrl)
  }
}
