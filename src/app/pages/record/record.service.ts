import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategories, IEvents } from '../history/history.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>('categories');
  }

  public addCategory(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>('categories', category);
  }

  public addEvent(event: IEvents): Observable<IEvents> {
    return this.http.post<IEvents>('events', event);
  }

  public deleteCategory(id: number): Observable<unknown> {
    return this.http.delete(`categories/${id}`);
  }

  public editCategory(id: number | undefined, category: ICategories): Observable<unknown> {
    return this.http.put(`categories/${id}`, category);
  }

}
