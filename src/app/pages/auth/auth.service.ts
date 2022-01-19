import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from "../../shared/interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getUser(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`users?email=${email}`);
  }

  public createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('users', user);
  }

}
