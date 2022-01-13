import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public getUser(email: string): any {
    return this.http.get(`http://localhost:3000/users?email=${email}`);
  }

  constructor(private http: HttpClient) { }
}
