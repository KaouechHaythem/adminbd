import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<user> {
    return this.http.get<user>(`${this.baseUrl}`);
  }


  signUp(user: user): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/signup`, user);
  }
  signIn(email:string,password:string): Observable<number> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pass', password);
    return this.http.post<number>(`${this.baseUrl}/signin`, formData);
  }

  deleteUser(email:string ): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${email}`);
  }

  

 
  
}
