import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, IEvent } from '../history/history.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private update: Subject<void> = new Subject<void>();

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

  public sendUpdate(): void {
    this.update.next();
  }

  public getUpdate(): Observable<any> {
    return this.update.asObservable();
  }

}
