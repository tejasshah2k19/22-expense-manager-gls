import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategoryApi(category:any):Observable<any>{
    return this.http.post(environment.apiUrl+"/category",category)
  }

  getAllCategories():Observable<any>{
    return this.http.get(environment.apiUrl+"/category")
  }

  
}
