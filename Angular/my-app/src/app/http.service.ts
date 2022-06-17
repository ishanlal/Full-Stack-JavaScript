import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<[]>{
    return this.http.get<[]>("https://jsonplaceholder.typicode.com/users");
  }
}
