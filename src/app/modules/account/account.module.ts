import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectEditorComponent } from './pages/project-editor/project-editor.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ],
  declarations: [ProjectsPageComponent, AccountContainerComponent, ProjectEditorComponent, ProjectViewComponent]
})
export class AccountModule { }
