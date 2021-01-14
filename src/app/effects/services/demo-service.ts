import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Customer } from 'src/app/shared/model/customer';

@Injectable()
export abstract class baseDemoService {
  abstract getCustomers():  Observable<any>

  abstract getCustomer(id: number):  Observable<Customer>
}

@Injectable()
export class demoService implements baseDemoService {

  private API_URL: string;

  constructor(private httpClient: HttpClient) { 
      this.API_URL = "http://localhost:3000";
    }

  public getCustomers(): Observable<any> {
    let uri = `${this.API_URL}/customers`;
    return this.httpClient.get<any>(uri);
  }

  public getCustomer(id: number): Observable<any> {
    let uri = `${this.API_URL}/customers?id=${id}`;
    return this.httpClient.get<any>(uri);
  }


  // public getCustomer(id: number): Observable<Customer> {
  //   let uri = `${this.API_URL}/customers?id=${id}`;
  //   this.httpClient.get<any>(uri).subscribe((data: Customer[])=> {
  //     //return of(null);
  //     debugger;
  //     return of(data[0]);
  //     }, error => of(null));

  //   return of();

  //   // this.httpClient.get(uri).subscribe((data: ClaimHelp[]) => {
  //   //   this.store.syncClaimsHelp(data);
  //   // }, error => this.log.logHttpError(error));
  // }

}

@Injectable()
export class stubDemoService implements baseDemoService {
  public getCustomers():  Observable<any> {
    return of([]);
  }

  public getCustomer(id: number):  Observable<Customer> {
    return of(null);
  }
}
