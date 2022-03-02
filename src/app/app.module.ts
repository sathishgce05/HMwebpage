import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { LifeWorkComponent } from './life-work/life-work.component';
import { CompanywebsiteComponent } from './companywebsite/companywebsite.component';
import{HttpClientModule}from'@angular/common/http';
import { JobrecommenderComponent } from './jobrecommender/jobrecommender.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    CurrentopeningsComponent,
    BenefitsComponent,
    LifeWorkComponent,
    CompanywebsiteComponent,
    JobrecommenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
