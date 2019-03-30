import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PublicWrapperComponent } from './components/public-wrapper/public-wrapper.component';

const routes: Routes = [
  {path: '', component: PublicWrapperComponent,
    children: [
      {path: '', component: AnnouncementComponent, data: {state: 'announcement'}},
      {path: 'signup', component: SignupPageComponent, data: {state: 'signup'}},
      {path: 'login', component: SignupPageComponent, data: {state: 'login'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
