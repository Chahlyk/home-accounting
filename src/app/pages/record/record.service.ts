import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, IEvent } from '../history/history.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private update: BehaviorSubject<object> = new BehaviorSubject<object>({});

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }

  public addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>('categories', category);
  }

  public addEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>('events', event);
  }

  public deleteCategory(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`categories/${id}`);
  }

  public editCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`categories/${category.id}`, category);
  }

  public sendUpdate(update: boolean): void {
    this.update.next({data: update});
  }

  public getUpdate(): Observable<any> {
    return this.update.asObservable();
  }

}
