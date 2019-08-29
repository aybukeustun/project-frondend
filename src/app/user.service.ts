import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private userLoginUrl: string;
  private userSaveUrl: string;
  
  
 
  constructor(private http: HttpClient) {
   
    this.userLoginUrl='http://localhost:8080/login/accessUser';
    this.userSaveUrl='http://localhost:8080/login/save';

  }
 
 
 
 
  public login(user:User) {
    console.log(user);
    return this.http.post<User>(this.userLoginUrl, user);
  }
  public save(user:User) {
    console.log(user);
    return this.http.post<User>(this.userSaveUrl, user);
  }

  
}
