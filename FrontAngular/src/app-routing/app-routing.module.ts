import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from 'src/app/components/home-component/home-component.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BalanceComponent } from 'src/app/components/balance/balance.component';


    const routes: Routes = [
        { path: 'home', component: HomeComponentComponent },
        { path: 'balances', component: BalanceComponent, canActivate: [AuthGuard] },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
