import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }

  base_url="https://localhost:7201/";

  getProducts(): Observable<any> {
    return this.http.get<any>(this.base_url+"api/product");
  }
}
