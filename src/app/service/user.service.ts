import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private idSource = new BehaviorSubject<Number>(0);
  currentId = this.idSource.asObservable();

  private baseUrlLogin = "http://localhost:8080/user/login";
  private baseUrlRegistration = "http://localhost:8080/user/addUser";

  constructor(private http : HttpClient) { }

  saveIdLogin(id : Number){
    this.idSource.next(id);
  }

  public loginuser(user :User):Observable<any>{
    return this.http.post<any>(`${this.baseUrlLogin}`, user);
  }

  saveUser(user:User){
    return this.http.post<User>(`${this.baseUrlRegistration}`, user);
  }

  

}
