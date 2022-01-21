import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICurrency } from "../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  public getRate(): Observable<ICurrency> {
    return this.http.get<ICurrency>(`currency`);
  }
}
