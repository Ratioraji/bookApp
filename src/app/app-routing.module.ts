import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import {OnboardingComponent } from "./onboarding/onboarding.component";
import {Onboarding2Component } from "./onboarding-2/onboarding-2.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NoReviewYetComponent } from './no-review-yet/no-review-yet.component';
import { BookNameComponent } from './book-name/book-name.component';

const routes : Routes = [
  {path:'',component:OnboardingComponent},
  {path:'onboarding',component:OnboardingComponent},
  {path:'onboarding-2',component:Onboarding2Component},
  {path:'sign-up',component:SignUpComponent},
  {path:'thank-you',component:ThankYouComponent},
  {path:'no-review-yet',component:NoReviewYetComponent},
  {path:'book-name',component:BookNameComponent}
] 


@NgModule({
  imports: [
    RouterModule.forRoot(routes),CommonModule
  ],exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
