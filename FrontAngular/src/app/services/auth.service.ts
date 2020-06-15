import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {map} from 'rxjs/operators';
import { IUserLogin } from '../interfaces/IUserLogin';
import { IUserRegister } from '../interfaces/IUserRegister';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  controllerRoute = 'auth';
  jwtHelper = new JwtHelperService();
  decoded:any;
  userName:string;

  constructor(private api: ApiService) { }

  authorizedLinks = [
    {name:'Home', url:'home'},
    {name:'Mis Balances', url:'balances'}

  ]

  links = [
    {name:'Home', url:'home'}
  ]

  login(model:IUserLogin) {
    return this.api.post(this.controllerRoute+'/login',model)
      .pipe(
        map((response:any) => {
          const user = response;
          if(user){
            sessionStorage.setItem('token',user.token);  
            this.setUserName();
          }
        })
      );
}

  register(model:IUserRegister) {
   return this.api.post(this.controllerRoute+'/register',model);
}

  loggedIn():boolean{
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getLinks():Object{
    return (this.loggedIn())? this.authorizedLinks : this.links;
  }

  logout(){
    sessionStorage.removeItem('token');
  }

  setUserName(){
    const token = sessionStorage.getItem('token');
    if(token){
      this.decoded = this.jwtHelper.decodeToken(token);
      this.userName = this.decoded.firstName;
    }
  }

}
