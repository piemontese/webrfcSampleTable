import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any/*User*/[]> {
    return this.http.get<any/*User*/[]>(this.serviceUrl);
  }

}
