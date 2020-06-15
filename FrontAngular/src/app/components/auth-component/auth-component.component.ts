import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUserLogin } from 'src/app/interfaces/IUserLogin';
import { IUserRegister } from 'src/app/interfaces/IUserRegister';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  @Input() display: string;
  @Output() close = new EventEmitter<boolean>();

  userLogin:IUserLogin = {
    dni:null,password:null
  };
  userRegister:IUserRegister = {
    dni:null,
    name:null,
    lastName:null,
    email:null,
    password:null
  };
  dniNumb:number;

  constructor(private auth:AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.userLogin.dni = this.dniNumb.toString();
    this.auth.login(this.userLogin).subscribe(next => {
       this.alertify.success('Bienvenido!');
       this.close.emit(true);
    },error => {
      this.alertify.error('Usuario o Contraseña incorrecto');
      this.close.emit(false);
    });
  }

  register(){
    this.userRegister.dni = this.dniNumb.toString();
    this.auth.register(this.userRegister).subscribe(next => {
      this.alertify.success('Se registro correctamente!');
      this.close.emit(true);
    },error => {
      this.alertify.error(error);
      this.close.emit(false);
    });
  }

  


}
