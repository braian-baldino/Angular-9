import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Accountant';

  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService){}

  ngOnInit(){
    const token = sessionStorage.getItem('token');
    if(token){
      this.authService.setUserName();
    }
  }
}
