import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  getApiData(url:string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'JWT '+this.getToken());
    return this.http.post(url, {"pair":"anx/btc","timestamp":'1573212003579'}, { headers: headers }); 
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
