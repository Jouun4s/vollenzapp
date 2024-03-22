import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private storage: Storage;
  constructor(private http: HttpClient) {
    this.storage = window.localStorage;
   }

  getInfo(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cadastro')
  } 

  set(key: any, value: any): boolean{
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: any) {
    if (this.storage) { 
      return JSON.parse(this.storage.getItem(key)!);
    }
    return null;
  }

}
