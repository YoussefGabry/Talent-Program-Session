import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private baseUrl = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  loadFirstToDo() {
    let url = this.baseUrl + '/todos/1'
    return this.http.get<any>(url);
  }

  loadAllToDos(limit: number, skip: number) {
    let url = this.baseUrl + '/todos'
    let params = new HttpParams();
    params = params.set('limit', limit)
    params = params.set('skip', skip)
    return this.http.get<any>(url, { params })
  }
}
