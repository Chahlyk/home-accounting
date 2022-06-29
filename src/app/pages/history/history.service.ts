import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory, IEvent } from './history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('events');
  }

  public getEvent(id: number): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`events?id=${id}`);
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }

}
