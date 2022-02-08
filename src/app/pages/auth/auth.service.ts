import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './auth.interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public getUser(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`users?email=${email}`);
  }

  public createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('users', user);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem( 'User' ) !== null;
  }

  public signOut(): void {
    localStorage.clear();
    this.router.navigate(['/auth/sign-in']);
  }

}
