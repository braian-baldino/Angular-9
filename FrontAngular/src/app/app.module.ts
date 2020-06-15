import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

//Components
import { AppComponent } from './app.component';
import {NavComponentComponent} from './../app/components/nav-component/nav-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableComponent } from './components/mat-table/mat-table.component';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponentComponent,
      HomeComponentComponent,
      AuthComponentComponent,
      MatTableComponent,
      BalanceComponent
   ],
   imports: [
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth'],
         }
      }),
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatTableModule

   ],
   providers: [
      AuthService,
      TokenInterceptorProvider,
      ErrorInterceptorProvider
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter(){
   return sessionStorage.getItem('token');
}
