import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //admin 
  constructor(private httpClient:HttpClient) { }


  getAllUsersApi():Observable<any>{
    return this.httpClient.get("http://localhost:9999/getallusers");
  }

  getAllRolesApi():Observable<any>{
    return this.httpClient.get("http://localhost:9999/role");
  }
  
  deleteUserApi(userId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:9999/deleteuser/"+userId)
  }

}
