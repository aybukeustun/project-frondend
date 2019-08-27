import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departmant } from './departmant';
import { Observable } from 'rxjs/Observable';

 
@Injectable()
export class DepartmantService {
 
  private departmantUrl: string;
  private departmantUrl2: string;
  
 
  constructor(private http: HttpClient) {
    this.departmantUrl = 'http://localhost:8080/departmant/getall';
    this.departmantUrl2='http://localhost:8080/departmant/save';
  }
 
  public findAll(): Observable<Departmant[]> {
    return this.http.get<Departmant[]>(this.departmantUrl);
  }
 
  public save(departmant: Departmant) {
    console.log(departmant);
    return this.http.post<Departmant>(this.departmantUrl2, departmant);
  }
}
