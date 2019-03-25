import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';

const routes: Routes = [
  {path: 'account', component: AccountContainerComponent,
  children: [
    {path: 'projects', component: ProjectsPageComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
