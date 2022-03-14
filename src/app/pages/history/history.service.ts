import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategories, IEvents } from './history.interface';
import { IUser } from '../auth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public subject: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('events');
  }

  public getEventById(id: number): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(`events?id=${id}`);
  }

  public getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>('categories');
  }

}
