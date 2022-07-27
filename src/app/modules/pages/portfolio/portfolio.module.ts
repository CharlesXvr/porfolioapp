import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RouterModule } from '@angular/router';
import { EducationCardComponent } from './components/cards/education-card/education-card.component';
import { EditEducationComponent } from './components/cards/education-card/edit-education/edit-education.component';
import { AddEducationComponent } from './components/cards/education-card/add-education/add-education.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EducationCardComponent,
    EditEducationComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    EducationCardComponent,
    AddEducationComponent,
    EditEducationComponent
  ]
})
export class PortfolioModule { }
