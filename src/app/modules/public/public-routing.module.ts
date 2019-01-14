import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/announcement', pathMatch: 'full'},
  {path: 'announcement', component: AnnouncementComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
