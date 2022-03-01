import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICategories, IEvents} from './history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public subject: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('events');
  }

  public getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>('categories');
  }

  public sendEvent(event: IEvents): void {
    this.subject.next({ data: event});
  }

  public getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}
