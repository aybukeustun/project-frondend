import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departmant } from './departmant';
import { Observable } from 'rxjs/Observable';

 
@Injectable()
export class DepartmantService {
 
  private departmantUrl: string;
  
 
  constructor(private http: HttpClient) {
    this.departmantUrl = 'http://localhost:8080/departmant/getall';
  }
 
  public findAll(): Observable<Departmant[]> {
    return this.http.get<Departmant[]>(this.departmantUrl);
  }
 
  public save(departmant: Departmant) {
    return this.http.post<Departmant>(this.departmantUrl, departmant);
  }
}
