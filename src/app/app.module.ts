import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './public/pages/landing-page/landing-page.component';
import { SignupPageComponent } from './public/pages/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
