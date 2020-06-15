import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAnualBalance } from '../interfaces/IAnualBalance';

@Injectable({
  providedIn: 'root'
})
export class AnualBalanceService {

    baseURL = environment.apiUrl;
    fullRoutePath = this.baseURL+'AnualBalance';

  constructor(private http: HttpClient) { }

    getAnualBalances():Observable<IAnualBalance[]>{
        return this.http.get<IAnualBalance[]>(this.fullRoutePath);
    }

}

