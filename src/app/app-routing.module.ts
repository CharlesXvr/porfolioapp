import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserInfoComponentComponent } from './shared/components/editUserInfoComponent/edit-user-info-component/edit-user-info-component.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./modules/pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'portfolio', loadChildren: () => import('./modules/pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'register', loadChildren: () => import('./modules/pages/auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'updateUser/:id', component: EditUserInfoComponentComponent },
  { path: 'users', loadChildren: () => import('./modules/pages/users/users.module').then(m => m.UsersModule) },
  { path: '**', loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule) }, 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
