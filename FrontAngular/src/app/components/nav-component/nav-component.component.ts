import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  toDisplay:string;
  isLoged:boolean;
  links:Object;

  constructor(private router:Router,
              public authService:AuthService) { }

  ngOnInit() {
    this.links = this.authService.getLinks();
    this.isLoged = this.authService.loggedIn(); 
  }

  displayLogin(){
    this.toDisplay = 'login';
  }

  displayRegister(){
    this.toDisplay = 'register';
  }

  logout(){
    this.authService.logout();
    this.isLoged = false;
    this.links = this.authService.getLinks();
    this.router.navigateByUrl('home');
  }

  closeAuth($event){
    this.isLoged = $event;    
    if(this.isLoged){
      this.router.navigateByUrl('');
      this.links = this.authService.getLinks();
    }
  }

}
