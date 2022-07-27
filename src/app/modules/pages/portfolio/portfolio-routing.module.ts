import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/cards/education-card/add-education/add-education.component';
import { EditEducationComponent } from './components/cards/education-card/edit-education/edit-education.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent, children: [
    { path: 'addEducationItem', component: AddEducationComponent },
    { path: 'editEducationItem', component: EditEducationComponent },
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
