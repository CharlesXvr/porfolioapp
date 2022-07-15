import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PortfolioModule } from './modules/pages/portfolio/portfolio.module';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './modules/pages/portfolio/portfolio.component';
import { RegisterModule } from './modules/pages/auth/register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { EditUserInfoComponentComponent } from './shared/components/editUserInfoComponent/edit-user-info-component/edit-user-info-component.component';
import { EditUserEducationComponentComponent } from './shared/components/editUserEducationComponent/edit-user-education-component/edit-user-education-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    EditUserInfoComponentComponent,
    EditUserEducationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MdbCheckboxModule,
    FormsModule,
    PortfolioModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    RegisterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
