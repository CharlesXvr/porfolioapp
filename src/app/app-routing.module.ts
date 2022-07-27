import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardService as guard } from '@app/shared/services/guards/user-guard.service';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./modules/pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'portfolio', loadChildren: () => import('./modules/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] }  },
  { path: 'register', loadChildren: () => import('./modules/pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'users', loadChildren: () => import('./modules/pages/users/users.module').then(m => m.UsersModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule) }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
