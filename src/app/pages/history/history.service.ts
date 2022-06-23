import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory, IEvent } from './history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public subject: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('events');
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }

  public sendEvent(event: IEvent[]): void {
    this.subject.next(event);
  }

  public getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}
