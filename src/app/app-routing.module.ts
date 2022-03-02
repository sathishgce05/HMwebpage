import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './benefits/benefits.component';
import { CompanywebsiteComponent } from './companywebsite/companywebsite.component';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { HomeComponent } from './home/home.component';
import { JobrecommenderComponent } from './jobrecommender/jobrecommender.component';
import { LifeWorkComponent } from './life-work/life-work.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'currentopenings',component:CurrentopeningsComponent},
  {path:'benefits',component:BenefitsComponent},
  {path:'life@work',component:LifeWorkComponent},
  {path:'companywebsite',component:CompanywebsiteComponent},
  {path:'jobrecommender',component:JobrecommenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
