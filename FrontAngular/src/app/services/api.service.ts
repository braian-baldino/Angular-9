import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnualBalance } from '../interfaces/IAnualBalance';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = environment.apiUrl;

constructor(private http: HttpClient) { }

  getAll(where) {
    return this.http.get(this.baseURL + where); 
}

get(where, id) {
  return this.http.get(this.baseURL + where + '/' + "getbyid" + '/' + id);
}

post(where, form): Observable<any> {
  return this.http.post(this.baseURL + where, form);
}

put(where, id, form): Observable<any> {
  return this.http.put(this.baseURL + where + '/' + id, form);
}

delete(id): Observable<any> {
  return this.http.delete(this.baseURL + id);
}

}
