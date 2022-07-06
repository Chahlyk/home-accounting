import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from './history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('events');
  }

  public getEvent(id: number): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('events', {
      params: new HttpParams().set('id', id)
    });
  }

}
