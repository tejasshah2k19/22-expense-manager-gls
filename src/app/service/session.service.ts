import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }


  signupApi(user: any) :Observable<any> {
    console.log("SignupApi Call -> ");
    console.log(user);
   return this.httpClient.post("http://localhost:9999/register",user)
  }

  loginApi(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9999/login",user)
  }
}
