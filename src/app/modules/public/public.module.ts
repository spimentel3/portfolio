import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginFormAnimatedComponent } from './components/login-form-animated/login-form-animated.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    AnnouncementComponent,
    LandingPageComponent,
    SignupPageComponent,
    LoginFormAnimatedComponent
  ]
})
export class PublicModule { }
