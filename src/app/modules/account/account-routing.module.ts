import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';
import { ProjectEditorComponent } from './pages/project-editor/project-editor.component';

const routes: Routes = [
  {path: 'account', component: AccountContainerComponent,
  children: [
    {path: 'projects', component: ProjectsPageComponent}
    , {path: 'project', component: ProjectViewComponent}
    , {path: 'newProject', component: ProjectEditorComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
