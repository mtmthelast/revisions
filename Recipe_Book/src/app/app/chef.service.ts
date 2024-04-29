import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from './Meal';


@Injectable({
  providedIn: 'root'
})
export class ChefService {
  private baseurl="http://localhost:3000/meals";


  constructor(private http:HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}
  GetMeals(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }
  getMealsList(): Observable<any> {
    return this.http.get(this.baseurl);
  }
  makeMeal(meal: Object): Observable<Object>{
    return this.http.post(this.baseurl, meal);
  }
  
  changeMeal(id: number, value:any): Observable<Object>{
    return this.http.put(`${this.baseurl}/${id}`, value);
  }
  deleteMeal(id: number): Observable<any>{
   return this.http.delete(`${this.baseurl}/${id}`, {responseType: "text"});
 }
}
