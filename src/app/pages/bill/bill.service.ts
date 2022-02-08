import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBill, ICurrency} from './bill.interface';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  public getBill(): Observable<IBill> {
    return this.http.get<IBill>('bill');
  }

  public getCurrency(): Observable<ICurrency> {
    return this.http.get<ICurrency>('currency');
  }

}
