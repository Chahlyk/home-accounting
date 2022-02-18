import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategories, IEvents} from './history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvents> {
    return this.http.get<IEvents>('events');
  }

  public getCategories(): Observable<ICategories> {
    return this.http.get<ICategories>('categories');
  }

}
