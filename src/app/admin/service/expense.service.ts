import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private httpClinet: HttpClient) { }

  getThisMonthExpApi(): Observable<any> {
    return this.httpClinet.get(environment.apiUrl + "/getthismonthexpense")
  }
  addExpApi(data: any): Observable<any> {
    return this.httpClinet.post(environment.apiUrl + "/addexpense", data);
  }

  getAllExpApi(): Observable<any> {
    return this.httpClinet.get(environment.apiUrl + "/getallexpenses")
  }

  getCurrentYearExp():Observable<any>{
    return this.httpClinet.get(environment.apiUrl+"/getcurrentyearexpense")
  }
}
