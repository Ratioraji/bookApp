import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { Onboarding2Component } from './onboarding-2/onboarding-2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NoReviewYetComponent } from './no-review-yet/no-review-yet.component';
import { BookNameComponent } from './book-name/book-name.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    Onboarding2Component,
    SignUpComponent,
    ThankYouComponent,
    NoReviewYetComponent,
    BookNameComponent
  ],
  imports: [
    NgbModule,BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
